import React, { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

type Presente = {
  id: number;
  nome: string;
  preco: string | number;
  imagem: string | null;
  comprado: boolean;
};

const PaginaAdmin = () => {
  const queryClient = useQueryClient();
  
  // Buscar presentes do banco de dados
  const { data: presentes, isLoading, isError, error } = useQuery<Presente[]>({
    queryKey: ['presentes'],
    queryFn: async () => {
      const res = await fetch('/api/presentes');
      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }
      return res.json();
    },
    retry: 3,
    retryDelay: 1000,
  });

  // Mutation para marcar como esgotado
  const marcarEsgotadoMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/presentes/${id}/esgotado`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['presentes'] });
      console.log(`✅ Presente "${data.nome}" marcado como esgotado!`);
    },
    onError: (error) => {
      console.error('❌ Erro ao marcar presente como esgotado:', error);
    },
  });

  // Mutation para marcar como disponível
  const marcarDisponivelMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/presentes/${id}/disponivel`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['presentes'] });
      console.log(`✅ Presente "${data.nome}" marcado como disponível!`);
    },
    onError: (error) => {
      console.error('❌ Erro ao marcar presente como disponível:', error);
    },
  });

  const handleMarcarEsgotado = (id: number, nome: string) => {
    if (window.confirm(`Tem certeza que deseja marcar "${nome}" como esgotado?`)) {
      marcarEsgotadoMutation.mutate(id);
    }
  };

  const handleMarcarDisponivel = (id: number, nome: string) => {
    if (window.confirm(`Tem certeza que deseja marcar "${nome}" como disponível?`)) {
      marcarDisponivelMutation.mutate(id);
    }
  };

  const formatarPreco = (valor: string | number) => {
    const numero = typeof valor === 'number' ? valor : Number(valor);
    if (Number.isNaN(numero)) return String(valor);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">🔧 Área Administrativa</h1>
        
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-mainGreen"></div>
              <span>Carregando presentes...</span>
            </div>
          </div>
        )}
        
        {isError && (
          <div className="text-center py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
              <div className="text-red-600 font-semibold mb-2">❌ Erro ao carregar presentes</div>
              <div className="text-red-500 text-sm">
                {error?.message || 'Não foi possível conectar ao banco de dados'}
              </div>
            </div>
          </div>
        )}
        
        {presentes && presentes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentes.map((presente) => (
              <div 
                key={presente.id}
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{presente.nome}</h3>
                <p className="text-muted-foreground mb-4">{formatarPreco(presente.preco)}</p>
                
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    presente.comprado 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {presente.comprado ? 'Esgotado' : 'Disponível'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {presente.comprado ? (
                    <button
                      onClick={() => handleMarcarDisponivel(presente.id, presente.nome)}
                      disabled={marcarDisponivelMutation.isPending}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {marcarDisponivelMutation.isPending ? 'Processando...' : 'Marcar como Disponível'}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMarcarEsgotado(presente.id, presente.nome)}
                      disabled={marcarEsgotadoMutation.isPending}
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {marcarEsgotadoMutation.isPending ? 'Processando...' : 'Marcar como Esgotado'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginaAdmin;

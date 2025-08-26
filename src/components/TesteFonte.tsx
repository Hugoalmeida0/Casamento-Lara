import React from 'react';

const TesteFonte = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Teste da Fonte Bickham Script Pro 3</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Teste com Tailwind */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Teste com Tailwind (font-bickham)</h2>
          <p className="text-3xl font-bickham text-gray-800 mb-2">
            Texto em Bickham Script Pro 3 Regular
          </p>
          <p className="text-2xl font-bickham font-bold text-gray-800 mb-2">
            Texto em Bickham Script Pro 3 Bold
          </p>
          <p className="text-2xl font-bickham italic text-gray-800">
            Texto em Bickham Script Pro 3 Italic
          </p>
        </div>

        {/* Teste com CSS inline */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Teste com CSS Inline</h2>
          <p 
            className="text-3xl text-gray-800 mb-2"
            style={{ fontFamily: "'Bickham Script Pro 3', cursive" }}
          >
            Texto em Bickham Script Pro 3 Regular (CSS Inline)
          </p>
          <p 
            className="text-2xl text-gray-800 mb-2"
            style={{ 
              fontFamily: "'Bickham Script Pro 3', cursive",
              fontWeight: 'bold'
            }}
          >
            Texto em Bickham Script Pro 3 Bold (CSS Inline)
          </p>
        </div>

        {/* Teste com classe CSS personalizada */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Teste com Classe CSS Personalizada</h2>
          <p className="text-3xl font-bickham-debug text-gray-800 mb-2">
            Texto com classe font-bickham-debug
          </p>
        </div>

        {/* Teste com FreightBigProLight */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Teste com FreightBigProLight</h2>
          <p className="text-3xl font-freight text-gray-800 mb-2">
            Texto em FreightBigProLight (font-freight)
          </p>
          <p 
            className="text-2xl text-gray-800 mb-2"
            style={{ fontFamily: "'FreightBigProLight', 'Georgia', serif" }}
          >
            Texto em FreightBigProLight (CSS Inline)
          </p>
        </div>

        {/* Informações de debug */}
        <div className="border p-6 rounded-lg bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Informações de Debug</h2>
          <div className="space-y-2 text-sm font-mono">
            <p><strong>Classe Tailwind:</strong> font-bickham, font-freight</p>
            <p><strong>Família da fonte:</strong> 'Bickham Script Pro 3', cursive | 'FreightBigProLight', serif</p>
            <p><strong>Arquivo CSS:</strong> /fonts/fonts.css</p>
            <p><strong>Arquivos de fonte:</strong> .woff, .ttf, .woff2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TesteFonte;

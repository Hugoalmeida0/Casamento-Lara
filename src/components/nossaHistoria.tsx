import fotoEncontro from '@/assets/capitulo1.png';
import fotoNamoro from '@/assets/capitulo2.png';
import fotoPedido from '@/assets/capitulo3.png';
import fotoCasamento from '@/assets/capitulo4.png';

const TimelineSection = () => {
  return (
    <section id="historia" className="h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4">
                     {/* Header */}
           <div className="text-center mb-6 md:mb-8">
             <h2 className="text-2xl md:text-4xl lg:text-5xl font-seasons font-bold text-mainGreen mb-3 md:mb-4">
               NOSSA HISTÓRIA
             </h2>
             <div className="w-16 md:w-24 h-px bg-mainGreen mx-auto mb-3 md:mb-4"></div>
             <div className="max-w-md mx-auto mb-4 md:mb-6">
               <p className="text-2xl md:text-3xl lg:text-4xl font-bickham italic text-muted-foreground leading-relaxed">
                 "O amor tudo sofre, tudo crê, tudo <br /> espera, tudo suporta"
               </p>
               <p className="font-freight text-muted-foreground text-xs md:text-sm mt-2">
                 Coríntios 13:4-7
               </p>
             </div>
           </div>

                                           {/* Story Text */}
            <div className="text-center max-w-4xl mx-auto mb-4 md:mb-6 space-y-1 md:space-y-2 px-4">
            <p className="font-inter text-foreground leading-relaxed text-sm md:text-base">
              No dia 05/07/2020, um simples “ulalá” em um status mudou tudo. Foi tão intenso que, em pouco tempo, já estávamos apaixonados e sonhando com o dia em que começaríamos a namorar.
            </p>
            
            <p className="font-inter text-foreground leading-relaxed text-sm md:text-base">
              Vivemos muitos capítulos desde então. Nos conhecemos ainda adolescentes, com apenas 14 e 15 anos, e crescemos lado a lado, enfrentando desafios, descobrindo quem éramos e aprendendo a amadurecer juntos. Não foi sempre fácil, mas escolhemos permanecer. Porque o amor, de fato, tudo suporta.
            </p>
            
            <p className="font-inter text-foreground leading-relaxed text-sm md:text-base">
            Hoje, olhamos para trás com gratidão e para frente com esperança. Mal podemos esperar pelo grande dia em que vamos oficializar aquilo que Deus já havia colocado em nossos corações desde o início.
            </p>
          </div>

          {/* Timeline with Photos */}
          <div className="relative">
                         {/* Decorative Dashed Line */}
             <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-mainGreen/40 to-transparent hidden md:block">
               <div className="w-full h-full bg-gradient-to-r from-transparent via-mainGreen/20 to-transparent" 
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 12px, hsl(var(--main-green) / 0.6) 12px, hsl(var(--main-green) / 0.6) 24px)'
                    }}>
               </div>
             </div>

                                                   {/* Photos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                                 {/* Photo 1 - Chapter 1 (Top) */}
                 <div className="relative group">
                   <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden border-2 border-mainGreen/20 shadow-soft hover:shadow-elegant transition-all duration-300">
                     <img 
                       src={fotoEncontro} 
                       alt="Capítulo 1 - Nosso Encontro"
                       className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                     />
                   </div>
                   <div className="bg-mainGreen/90 backdrop-blur-sm rounded-b-lg -mt-1 px-3 py-2">
                     <p className="font-freight text-white text-center text-xs md:text-sm font-medium">
                       Capítulo 1
                     </p>
                   </div>
                 </div>

                 {/* Photo 2 - Chapter 2 (Bottom) */}
                 <div className="relative group mt-6 md:mt-8 lg:mt-10">
                   <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden border-2 border-mainGreen/20 shadow-soft hover:shadow-elegant transition-all duration-300">
                     <img 
                       src={fotoNamoro} 
                       alt="Capítulo 2 - Nosso Namoro"
                       className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                     />
                   </div>
                   <div className="bg-mainGreen/90 backdrop-blur-sm rounded-b-lg -mt-1 px-3 py-2">
                     <p className="font-freight text-white text-center text-xs md:text-sm font-medium">
                       Capítulo 2
                     </p>
                   </div>
                 </div>

                 {/* Photo 3 - Chapter 3 (Top) */}
                 <div className="relative group">
                   <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden border-2 border-mainGreen/20 shadow-soft hover:shadow-elegant transition-all duration-300">
                     <img 
                       src={fotoPedido} 
                       alt="Capítulo 3 - O Pedido"
                       className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                     />
                   </div>
                   <div className="bg-mainGreen/90 backdrop-blur-sm rounded-b-lg -mt-1 px-3 py-2">
                     <p className="font-freight text-white text-center text-xs md:text-sm font-medium">
                       Capítulo 3
                     </p>
                   </div>
                 </div>

                 {/* Photo 4 - Chapter 4 (Bottom) */}
                 <div className="relative group mt-6 md:mt-8 lg:mt-10">
                   <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden border-2 border-mainGreen/20 shadow-soft hover:shadow-elegant transition-all duration-300">
                     <img 
                       src={fotoCasamento} 
                       alt="Capítulo 4 - Nosso Casamento"
                       className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                     />
                   </div>
                   <div className="bg-mainGreen/90 backdrop-blur-sm rounded-b-lg -mt-1 px-3 py-2">
                     <p className="font-freight text-white text-center text-xs md:text-sm font-medium">
                       Capítulo 4
                     </p>
                   </div>
                 </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
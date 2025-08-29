import fotoCasal1 from '@/assets/std1.png';
import fotoCasal2 from '@/assets/std2.png';
import fotoCasal3 from '@/assets/capa2.jpeg';

const SaveTheDate = () => {
  return (
    <section 
      id="save-the-date"
      className="min-h-screen flex items-center justify-center py-10 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Texto Save the Date com Gradiente */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10xl] font-freight font-bold tracking-wider leading-tight">
                <span className="bg-gradient-to-r from-foreground to-mainGreen bg-clip-text text-transparent">
                    SAVE<br />
                    THE<br />
                    DATE!
                </span>
            </h2>
          </div>

          {/* Fotos Grandes e Data */}
          <div className="text-center order-2 lg:order-2">
            {/* Fotos ovais grandes */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-8 lg:mb-12">
              <div className="relative">
                <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-80 rounded-full overflow-hidden border-2 border-mainGreen/30 shadow-xl">
                  <img 
                    src={fotoCasal1}   
                    alt="Casal na praia" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-80 rounded-full overflow-hidden border-2 border-mainGreen/30 shadow-xl">
                  <img 
                    src={fotoCasal2} 
                    alt="Casal abraçado" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-80 rounded-full overflow-hidden border-2 border-mainGreen/30 shadow-xl">
                  <img 
                    src={fotoCasal3} 
                    alt="Casal sorrindo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Data com Gradiente */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 xl:space-x-12">
              <div className="text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-freight font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                  05
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-freight font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                  JULHO
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-freight font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDate;

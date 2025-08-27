import fotoCasal1 from '@/assets/capa4.jpeg';
import fotoCasal2 from '@/assets/capa2.jpeg';
import fotoCasal3 from '@/assets/capa3.jpeg';

const SaveTheDate = () => {
  return (
    <section 
      id="save-the-date"
      className="min-h-screen flex items-center justify-center py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Texto Save the Date com Gradiente */}
          <div className="text-left md:text-left">
            <h2 className="text-[10xl] md:text-8xl lg:text-9xl font-freight font-bold tracking-wider leading-tight">
                <span className="bg-gradient-to-r from-foreground to-main-green bg-clip-text text-transparent">
                    SAVE<br />
                    THE<br />
                    DATE!
                </span>
            </h2>
          </div>

          {/* Fotos Grandes e Data */}
          <div className="text-center">
            {/* Fotos ovais grandes */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="relative">
                <div className="w-64 h-80 rounded-full overflow-hidden border-2 border-mainGreen/30 shadow-xl">
                  <img 
                    src={fotoCasal1}   
                    alt="Casal na praia" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="w-64 h-80 rounded-full overflow-hidden border-2 border-mainGreen/30 shadow-xl">
                  <img 
                    src={fotoCasal2} 
                    alt="Casal abraçado" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="w-64 h-80 rounded-full overflow-hidden border-2 border-mainGreen/30 shadow-xl">
                  <img 
                    src={fotoCasal3} 
                    alt="Casal sorrindo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Data com Gradiente */}
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <span className="text-5xl md:text-6xl font-freight font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                  05
                </span>
              </div>
              <div className="text-center">
                <span className="text-5xl md:text-6xl font-freight font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                  JULHO
                </span>
              </div>
              <div className="text-center">
                <span className="text-5xl md:text-6xl font-freight font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
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

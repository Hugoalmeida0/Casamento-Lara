import { useState, useEffect } from 'react';

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Casamento será em 26 de julho de 2026
    const weddingDate = new Date('2026-07-26T00:00:00-01:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        // Cálculo mais preciso para meses
        let months = 0;
        let days = totalDays;
        
        // Calcula meses considerando o calendário real
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const weddingYear = weddingDate.getFullYear();
        const weddingMonth = weddingDate.getMonth();
        
        months = (weddingYear - currentYear) * 12 + (weddingMonth - currentMonth);
        
        // Ajusta os dias baseado nos meses calculados
        const tempDate = new Date(now);
        tempDate.setMonth(tempDate.getMonth() + months);
        
        // Se passou do mês do casamento, ajusta para o mês anterior
        if (tempDate > weddingDate) {
          months--;
          tempDate.setMonth(tempDate.getMonth() - 1);
        }
        
        // Calcula os dias restantes
        days = Math.floor((weddingDate.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));

        return {
          months: Math.max(0, months),
          days: Math.max(0, days),
          hours: totalHours % 24,
          minutes: totalMinutes % 60,
          seconds: totalSeconds % 60,
        };
      }

      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.months, label: 'Meses' },
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' },
  ];

  return (
    <div className="text-center mb-12">
      <h2 className="font-bickham text-lg md:text-5xl mb-8 tracking-wider text-white">Faltam:</h2>
      
      <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="text-center">
            <div className="p-4 bg-black/20 backdrop-blur-sm rounded-lg shadow-lg border border-white/10">
              <div className="text-3xl md:text-25xl font-bold text-mainGreen mb-2">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="font-freight text-xs md:text-sm tracking-wider uppercase text-white">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
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
    // Casamento foi em 29 de junho de 2024, então mostramos tempo desde o casamento
    const weddingDate = new Date('2024-06-29T00:00:00-03:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = now.getTime() - weddingDate.getTime();

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
        const totalMonths = Math.floor(totalDays / 30);

        return {
          months: totalMonths,
          days: totalDays % 30,
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
      <h2 className="wedding-text text-lg mb-8 tracking-wider">Casados há:</h2>
      
      <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-soft border border-border/50">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-champagne mb-2">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="wedding-text text-xs md:text-sm tracking-wider uppercase">
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
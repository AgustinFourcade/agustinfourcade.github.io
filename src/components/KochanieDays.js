import React, { useState, useEffect } from "react";

export const KochanieDays = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("2024-02-17T18:00:00Z");
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const calculateTimeLeftForDate = () => {
    const now = new Date();
    const targetDate = new Date("2024-01-24T16:00:00Z");
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timeLeftForDate, setTimeLeftForDate] = useState(
    calculateTimeLeftForDate()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setTimeLeftForDate(calculateTimeLeftForDate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="kochanieDays" id="kochanieDays">
      <div class="contenedor">
        <div className="cph">
          <h1>
            Faltan: <br /> <span className="highlight">{timeLeft.days}</span>
            días, <br />
            <span className="highlight">{timeLeft.hours}</span>horas,
            <br />
            <span className="highlight">{timeLeft.minutes}</span>minutos para
            ver al amor de mi vida ❤️
          </h1>
        </div>
        <div className="cita">
          <h1>
            Faltan: <br />
            <span className="highlight">{timeLeftForDate.days}</span>días,
            <br />
            <span className="highlight">
              {timeLeftForDate.hours}
            </span>horas, <br />
            <span className="highlight">{timeLeftForDate.minutes}</span>minutos
            para nuestra cita virtual 💬
          </h1>
        </div>

        {/* <h2> Quedan:</h2>
        <div class="txt-1">
          <h1>{timeLeft.days} </h1>
          <div class="txt-1">
            <h2> días,</h2>
          </div>
        </div>
        <div class="txt-1">
          <h1>{timeLeft.hours} </h1>
          <div class="txt-1">
            <h2>horas,</h2>
          </div>
        </div>
        <div class="txt-1">
          <h1>{timeLeft.minutes} </h1>
          <div class="txt-1">
            <h2>minutos y</h2>
          </div>
        </div>
        <div class="txt-1">
          <h1>{timeLeft.seconds} </h1>
          <div class="txt-1">
            <h2>segundos</h2>
          </div>
        </div>
        <div>
          <h2>para ver al amor de mi vida ❤️</h2>
        </div> */}
      </div>
    </section>
  );
};

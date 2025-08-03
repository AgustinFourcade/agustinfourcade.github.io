import { useState, useEffect } from "react";
import images from "../components/getKochanieImages";

export const KochanieDays = () => {
  const getRandomImage = () =>
    images[Math.floor(Math.random() * images.length)];
  const getImageBasedOnDate = () => images[new Date().getDate() % images.length]; // Cambiado para que sea dinámico

  const [currentImage, setCurrentImage] = useState(getRandomImage());

  useEffect(() => {
    function checkIsMidnight() {
      const now = new Date();
      return now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0;
    }

    if (checkIsMidnight()) {
      setCurrentImage(getRandomImage());
      console.log("New image set at midnight");
    } else {
      setCurrentImage(getImageBasedOnDate());
      console.log(`Using image based on date ${new Date().getDate()} as it's not midnight`);
    }
  }, []); // se ejecuta solo una vez al montar

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(getRandomImage());
    }, 86400000); // 24 horas en ms

    return () => clearInterval(interval);
  }, []);

  const style = {
    backgroundImage: `url(${currentImage})`,
    position: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "50vh",
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("2025-12-30T14:10:00Z");
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
    <section style={style} className="kochanieDays" id="kochanieDays">
      <div class="contenedor">
        <div className="cph">
          <h1>
            Faltan: <br /> <span className="highlight">{timeLeft.days}</span>
            días, <br />
            <span className="highlight">{timeLeft.hours}</span>horas,
            <br />
            <span className="highlight">{timeLeft.minutes}</span>minutos para
            ver a mi gordita 🇦🇷❤️
          </h1>
        </div>
        {/* <div className="cita">
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
        </div> */}

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

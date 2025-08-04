import { useState, useEffect } from "react";
import images from "../components/getKochanieImages";

export const KochanieDays = () => {
  const getRandomImage = () =>
    images[Math.floor(Math.random() * images.length)];
  const getImageBasedOnDate = () =>
    images[(new Date().getDate() % images.length) + 87]; // Cambiado para que sea dinámico

  const [currentImage, setCurrentImage] = useState(getRandomImage());

  useEffect(() => {
    function checkIsMidnight() {
      const now = new Date();
      console.log("🚀 ~ now:", now);
      console.log("\n");
      return (
        now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0
      );
    }

    if (checkIsMidnight()) {
      setCurrentImage(getRandomImage());
      console.log("New image set at midnight");
    } else {
      setCurrentImage(getImageBasedOnDate());
      console.log(
        `Using image based on date ${new Date().getDate()} as it's not midnight`
      );
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
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center center",
    backgroundSize: "cover",
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
      <div className="overlay" />
        <div className="countdown-card">
          <h1>
            <span className="frase">Faltan: </span>
            <span className="highlight">{timeLeft.days}</span> días,
            <span className="highlight"> {timeLeft.hours}</span> horas,
            <span className="highlight"> {timeLeft.minutes}</span> minutos y
            <span className="highlight"> {timeLeft.seconds}</span> segundos
            <h2 className="amorcito">para abrazar a mi personita favorita 🇦🇷❤️</h2>
          </h1>
        {/* Si quieres mostrar la cuenta regresiva para la cita virtual, descomenta esto */}
        {/* 
        <div className="cita">
          <h1>
            Faltan:
            <br />
            <span className="highlight">{timeLeftForDate.days}</span> días,
            <span className="highlight"> {timeLeftForDate.hours}</span> horas,
            <span className="highlight"> {timeLeftForDate.minutes}</span> minutos,
            <span className="highlight"> {timeLeftForDate.seconds}</span> segundos
            <br />
            para nuestra cita virtual 💬
          </h1>
        </div>
        */}
      </div>
    </section>
  );
};

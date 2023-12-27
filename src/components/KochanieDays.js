import React, { useState, useEffect } from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import kochaniePhoto from "../assets/img/kochaniePhoto.jpg";

export const KochanieDays = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("2024-02-17T19:00:00Z"); // Coloca la fecha y hora objetivo aquí
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="kochanieDays" id="kochanieDays">
      <div class="contenedor">
        <h2> Quedan:</h2>
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
        </div>
      </div>
    </section>
  );
};

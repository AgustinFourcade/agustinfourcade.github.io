import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import astronauta from "../assets/img/astronauta.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import background1 from "../assets/img/background-1.png";
import background2 from "../assets/img/background-2.jpeg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100); //How much faster the letters are written
  const period = 150; //How much time pass between letters

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-right">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={"animate__animated animate__slideInLeft"}>
                  <span className="tagline">Hello, it's me! 😁👀</span>
                  <h1>
                    {/* <h3></h3> */}
                    <h1>Agustin Fourcade</h1>
                    <h3>
                      And I'm{" "}
                      <span className="wrap" Software Engineer>
                        {text}
                      </span>
                    </h3>
                  </h1>
                  <p>
                    I am an experienced programmer skilled in multiple languages
                    such as JavaScript, Java, PHP, Node, and React, with
                    expertise in both front-end and back-end development.
                  </p>
                  <p>
                    I have a strong understanding of databases, allowing me to
                    create scalable solutions and solve complex technical
                    problems.
                  </p>
                  <p>
                    I pay great attention to detail in developing web
                    applications and can work independently or collaboratively.
                  </p>
                  <p>
                    Outside of work, I enjoy traveling and being in nature,
                    particularly in the mountains ⛰️. I am relocating to Sweden
                    🇸🇪 to pursue personal goals and improve my English. My next
                    adventure is to drive along Argentina's Route 40, exploring
                    its scenic beauty 🚗.
                  </p>
                  <button
                    onClick={() =>
                      window
                        .open(
                          "https://www.linkedin.com/in/agustin-fourcade/",
                          "_blank"
                        )
                        .focus()
                    }
                  >
                    Let's connect{""}
                    <ArrowRightCircle size={25}></ArrowRightCircle>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={11} md={5} xl={4}>
            <div className="imgMovement">
              <img src={astronauta} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

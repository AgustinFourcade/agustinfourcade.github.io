import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Backend Developer",
    "Frontend Developer",
    "FullStack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100); //How much faster the letters are written
  const period = 200; //How much time pass between letters

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
      setDelta(100);
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
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    {"Hi I'm Agustin Fourcade "}
                    <span className="wrap" Backend Developer>
                      {text}
                    </span>
                  </h1>
                  <p>
                    As a programmer, I possess extensive experience in multiple
                    programming languages for both front-end and back-end
                    development, including JavaScript, Java, PHP, Node, and
                    React. Furthermore, I have a solid knowledge of both
                    relational and non-relational databases, which enables me to
                    design scalable solutions and solve complex technical
                    problems. I excel in developing complex web applications and
                    pay great attention to detail when implementing projects.
                    With a strong understanding of programming principles and
                    excellent interpersonal skills, I am able to work both
                    independently and collaboratively to achieve project goals
                    effectively and efficiently.
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
            <img src={headerImage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

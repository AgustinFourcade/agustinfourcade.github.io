import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                I possess a range of skills in several programming languages.
              </p>
              <p>
                I am able to use these languages to create dynamic and engaging
                web applications. In addition, I have a solid understanding of
                both SQL and NoSQL databases, which allows me to design scalable
                and efficient data solutions. I am also familiar with tools such
                as GIT and Jira, which help me manage and collaborate on
                projects with other team members. In terms of personal
                qualities, I am proactive and able to take initiative, which
                enables me to identify and solve problems effectively.
              </p>
              <p>
                I work well in a team environment and am able to communicate and
                collaborate effectively with others.
              </p>
              <p>
                Turning to my hobbies, I enjoy spending time outdoors, including
                hiking, cycling, camping, and snowboarding. These activities
                demonstrate my passion for exploring new places and trying new
                things. In terms of language proficiency, I am a native speaker
                at a B2 level and have an intermediate level of proficiency in
                several other languages, which shows my dedication to learning
                and adapting to new cultures.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <h5>SQL – NoSQL</h5>
                </div>
                <div className="item">
                  <h5>GIT – Jira</h5>
                </div>
                <div className="item">
                  <h5>Teamwork</h5>
                </div>
                <div className="item">
                  <h5>Proactive</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

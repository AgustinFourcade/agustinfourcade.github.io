import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp-pink.png";
// import colorSharp from "../assets/img/color-sharp-blue.png";
import aws from "../assets/img/amazon-web-services-2.svg";

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
              <h1>Skills</h1>
              {/* <p>
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
              </p> */}

              <p>
                I possess programming skills in multiple languages and am able
                to create dynamic web applications.
              </p>
              <p>
                My knowledge of SQL and NoSQL databases enables me to design
                scalable data solutions. Additionally, I have experience using
                tools like GIT and Jira for project management and
                collaboration.
              </p>
              <p>
                I am proactive and able to solve problems effectively, and I
                work well in a team environment.
              </p>
              <p>
                My hobbies include outdoor activities like hiking 🥾, cycling
                🚴🏻, camping ⛺️, and snowboarding 🏂.
              </p>
              <p>
                I am also proficient in multiple languages , demonstrating my
                dedication to learning and adapting to new cultures.
              </p>
              {/* <Carousel
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
              </Carousel> */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="skills-icon">
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> /*java script */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /> /*java */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" /> /*php */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" /> /*node */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> /*node */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            /*mySQL */
          }
        </a>
      </div>
      <div className="skills-icon">
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
            /*Postres */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            /*GIT */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg" />
            /*GCP */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
            /*docker */
          }
        </a>
        <a href="#skills">
          {
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" />
            /*terraform */
          }
        </a>
        <a>{<img src={aws} /> /*aws */}</a>
      </div>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

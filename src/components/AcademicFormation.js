import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2-pink.png";
// import colorSharp2 from "../assets/img/color-sharp2-blue.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const AcademicFormation = () => {
  const formations = [
    {
      title: "National Technological University - Information Systems Engineering",
      date: "March 2020 – October 2022",
      description:
        "• Plan, direct, execute and control the study, analysis, design, development, implementation and testing of information systems. Evaluate and select available programming systems for use in information systems.",
      location: "Argentina 🇦🇷",
    },
    {
      title: "English course",
      date: "August 2021 – January 2023",
      description:
        "• Grade: B2",
      location: "Argentina 🇦🇷",
    },
    {
      title: " “María Sánchez de Thompson” - Professional Computer Technician in Programming",
      date: "March 2014 – December 2019",
      description:
      "• As a Professional Computer Technician and Programming Staff I am able to:  ",
      description1: "- Project, produce, adapt, implement and maintain computer applications.",
      description2: "- Design, install, configure and maintain computer systems.",
      description3: "- Perform technical and user documentation according to the functional and technical requirements of applications and systems.",
      description4: "- Assist and advise users in the choice, acquisition, installation and customization of applications, equipment and systems.",
      description5: "- Act in all cases under the safety regulations in force.",
      description6: "- Work professionally as an employee or as an individual or associative economic-productive entrepreneur.",
      location: "Argentina 🇦🇷",
    }
  ];

  return (
    <section className="academicFormation" id="academicFormation">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h1>Academic Formation</h1>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="academicFormation-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">UTN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Liceo Cultural Britanico</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Technical School N°3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <h2>{formations[0].title}</h2>
                    <i>{formations[0].date}</i>
                    <p>{formations[0].description}</p>
                    <p>{formations[0].location}</p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <Row>
                    <h2>{formations[1].title}</h2>
                    <i>{formations[1].date}</i>
                    <p>{formations[1].description}</p>
                    <p>{formations[1].location}</p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <h2>{formations[2].title}</h2>
                    <i>{formations[2].date}</i>
                    <p>{formations[2].description}</p>
                    <p1>{formations[2].description1}</p1>
                    <p1>{formations[2].description2}</p1>
                    <p1>{formations[2].description3}</p1>
                    <p1>{formations[2].description4}</p1>
                    <p1>{formations[2].description5}</p1>
                    <p1>{formations[2].description6}</p1>
                    <p>{formations[2].location}</p>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

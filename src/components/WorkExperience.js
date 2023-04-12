import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const WorkExperience = () => {
  const experiences = [
    {
      title: "IKEA – Junior Software Engineer",
      date: "October 2022 – Actuality",
      description:
        "• Development, maintenance and optimization of the IKEA search engine.",
      location: "Malmö, Sweden 🇸🇪",
    },
    {
      title: "Cencosud – Junior Software Engineer",
      date: "August 2021 – January 2023",
      description: "• Development of a search engine in Node JS.",
      description1: "• Infrastructure development with Terraform IaC",
      description2: "• Search engine optimization.",
      location: "Argentina 🇦🇷",
    },
    {
      title: "Fulljaus – Junior Software Developer",
      date: "September 2020 – September 2021",
      description:
        "• Development and maintenance of an e-commerce platform to integrate different marketplaces and sellers into a single platform.",
      location: "Argentina 🇦🇷",
    },
    {
      title: "SantaBros",
      date: "March 2019 – September 2019",
      description:
        "• Maintenance of workspaces for the Government of the City of Buenos Aires.",
      location: "Argentina 🇦🇷",
    },
  ];

  return (
    <section className="workExperience" id="workExperience">
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
                  <h1>Work Experience</h1>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="workExperience-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">IKEA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Cencosud</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Fulljaus</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Santabros</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <h2>{experiences[0].title}</h2>
                    <i>{experiences[0].date}</i>
                    <p>{experiences[0].description}</p>
                    <p>{experiences[0].location}</p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <Row>
                    <h2>{experiences[1].title}</h2>
                    <i>{experiences[1].date}</i>
                    <p1>{experiences[1].description}</p1>
                    <p1>{experiences[1].description1}</p1>
                    <p1>{experiences[1].description2}</p1>
                    <p>{experiences[1].location}</p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <h2>{experiences[2].title}</h2>
                    <i>{experiences[2].date}</i>
                    <p>{experiences[2].description}</p>
                    <p>{experiences[2].location}</p>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    <h2>{experiences[3].title}</h2>
                    <i>{experiences[3].date}</i>
                    <p>{experiences[3].description}</p>
                    <p>{experiences[3].location}</p>
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

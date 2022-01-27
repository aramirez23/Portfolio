import { Container, Carousel, Col, Row, Stack } from "react-bootstrap";
import healthPlanner01 from "../images/healthPlanner01.png";
import healthPlanner02 from "../images/healthPlanner02.png";
import healthPlanner03 from "../images/healthPlanner03.png";
import healthPlanner04 from "../images/healthPlanner04.png";

function HealthPlanner() {
    return (
        <Container fluid className="bg-dark text-white" style={{ minHeight: '100vh', paddingTop: "20px"}}>
          <Row>
            <Col>
              <Carousel className="carousel-size justify-content-md-center">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={healthPlanner01}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Home Page</h3>
                    <p>
                      Home tab of app where upcoming appointments are shown.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={healthPlanner02}
                    alt="Third slide"
                  />
    
                  <Carousel.Caption>
                    <h3>History</h3>
                    <p>
                      History tab of app where past appointments are shown.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={healthPlanner03}
                    alt="Fourth slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Create Appointment</h3>
                    <p>
                      Create appointment tab of app where user can create a new appointment.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={healthPlanner04}
                    alt="Fourth slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Appointment Details</h3>
                    <p>
                      Details of the appointment with the ability to set a notification or share the details of the appointment through text.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <Stack gap={3} >
                <h2 className="text-center">HealthPlanner</h2>
                <ul>
                  <li style={{ marginBottom:10 }}>Team member in group of 5 to create an app that simulates a healthcare appointment app</li>
                  <li style={{ marginBottom:10 }}>Developed using React Native to create a component-based Android and iOS app that follows each platform's design guidelines</li>
                  <li style={{ marginBottom:10 }}>Designed using the human interface principles and design patterns learned in the course</li>
                  <li style={{ marginBottom:10 }}>The prototype of the app was created through Figma</li>
                  <a className="btn btn-primary btn-width" style={{display: "block", margin: "auto"}} href="https://github.com/aramirez23/HealthPlanner-CSC-642-Final-Project-">GitHub Respository</a>
                </ul>
              </Stack>
            </Col>
          </Row>
        </Container>
      );
}

export default HealthPlanner;
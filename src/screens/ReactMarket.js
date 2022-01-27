import { Container, Carousel, Col, Row, Stack } from "react-bootstrap";
import reactMarketCover from "../images/reactMarketCover.png";
import reactMarket01 from "../images/reactMarketCreateItem.png";
import reactMarket02 from "../images/reactMarketLogin.png";
import reactMarket03 from "../images/reactMarketRegister.png";

function ReactMarket() {
    return (
        <Container fluid className="bg-dark text-white" style={{ minHeight: '100vh', paddingTop: "20px"}}>
          <Row>
            <Col>
              <Carousel className="justify-content-md-center">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={reactMarketCover}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Front Page</h3>
                    <p>
                      The front page of the website.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={reactMarket01}
                    alt="Second slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Add Listing</h3>
                    <p>The page to add an item to the site.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={reactMarket02}
                    alt="Third slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Login</h3>
                    <p>
                      The page to login.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={reactMarket03}
                    alt="Fourth slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Register</h3>
                    <p>
                      The page to register a new account.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <Stack gap={3} >
                <h2 className="text-center">E-Commerce Prototype</h2>
                <ul>
                  <li style={{ marginBottom:10 }}>Team member in group of 3 to create a small e-commerce prototype within a week</li>
                  <li style={{ marginBottom:10 }}>Developed using React/Redux to create a component-based website with a predictable and centralized application state</li>
                  <li style={{ marginBottom:10 }}>Created a container with Docker so the application could easily run on the host OS</li>
                  <li style={{ marginBottom:10 }}>Created a database using MongoDB to store listing data for website</li>
                  <li style={{ marginBottom:10 }}>Entirely remote work environment through Zoom</li>
                  <a className="btn btn-primary btn-width" style={{display: "block", margin: "auto"}} href="https://github.com/aramirez23/CSC-667-Final-Project">GitHub Respository</a>
                </ul>
              </Stack>
            </Col>
          </Row>
        </Container>
      );
}

export default ReactMarket;
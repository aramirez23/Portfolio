import { Container, Carousel, Col, Row, Stack } from "react-bootstrap";
import sfsuTradeMartCover from "../images/sfsuTradeMartCover.png";
import sfsuTradeMart01 from "../images/sfsuTradeMart01.png";
import sfsuTradeMart02 from "../images/sfsuTradeMart02.png";
import sfsuTradeMart03 from "../images/sfsuTradeMart03.png";
import "./Projects.css";

function SFSUTradeMart() {
  return (
    <Container fluid className="bg-dark text-white" style={{ minHeight: '100vh', paddingTop: "20px"}}>
      <Row>
        <Col>
          <Carousel className="justify-content-md-center">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sfsuTradeMartCover}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Front Page</h3>
                <p>
                  Show the newest added item/service.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sfsuTradeMart01}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Search</h3>
                <p>The results of a search.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sfsuTradeMart02}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Listing</h3>
                <p>
                  Show the listing along with its details and to contact seller.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sfsuTradeMart03}
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <h3>Contact</h3>
                <p>
                  Contact the seller to make an offer.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Stack gap={3} >
            <h2 className="text-center">SFSU Trade Mart</h2>
            <ul>
              <li style={{ marginBottom:10 }}>Team Lead of group of 6 to develop a full WWW application called SFSU Trade Mart where SFSU staff, faculty, and students can buy/sell/exchange items/services (Not Official SFSU Site - For Educational Purposes Only)</li>
              <li style={{ marginBottom:10 }}>Utilized knowledge of full SE lifecycle including best practices of SE teamwork and SE processes such as Agile/Scrum and User Centered Design for providing a good user experience</li>
              <li style={{ marginBottom:10 }}>Entirely remote work environment through Zoom</li>
              <li style={{ marginBottom:10 }}>Developed in Flask, version management handled on GitHub, hosted on AWS</li>
              <li style={{ marginBottom:10 }}>Connected the site with Google Analytics to track traffic stats</li>
              <a className="btn btn-primary btn-width" style={{display: "block", margin: "auto"}} href="https://github.com/aramirez23/CSC648-SFSU-Trade-Mart-Project">GitHub Respository</a>
            </ul>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default SFSUTradeMart;

import { Container, Carousel, Col, Row, Stack } from "react-bootstrap";
import actionRPGCover from "../images/actionRPGCover.png";
import actionRPG01 from "../images/actionRPG01.png";
import actionRPG02 from "../images/actionRPG02.png";
import actionRPG03 from "../images/actionRPG03.png";
import actionRPG04 from "../images/actionRPG04.png";

function ActionRPG() {
    return (
        <Container fluid className="bg-dark text-white" style={{ minHeight: '100vh', paddingTop: "20px"}}>
          <Row>
            <Col>
              <Carousel className="justify-content-md-center">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={actionRPGCover}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Start Screen</h3>
                    <p>
                      Main menu of the game.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={actionRPG01}
                    alt="Second slide"
                  />
    
                  <Carousel.Caption>
                    <h3>New Game</h3>
                    <p>The starting area of the game.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={actionRPG02}
                    alt="Third slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Dialogue System</h3>
                    <p>
                      Player can talk to NPCs sometimes with multiple dialogue choices.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={actionRPG03}
                    alt="Fourth slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Stats</h3>
                    <p>
                      The character has stats that can be leveled through combat.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={actionRPG04}
                    alt="Fifth slide"
                  />
    
                  <Carousel.Caption>
                    <h3>Combat</h3>
                    <p>
                      Throw fireballs at slimes to gain experience.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <Stack gap={3} >
                <h2 className="text-center">Action RPG</h2>
                <ul>
                  <li style={{ marginBottom:10 }}>Action RPG developed in Java where you can travel between maps fighting enemies, leveling up, collecting items, and completing a quest with two items</li>
                  <li style={{ marginBottom:10 }}>Implemented a basic animation system so characters could have walk cycles</li>
                  <li style={{ marginBottom:10 }}>Implemented a basic branching dialogue system with two endings for a quest</li>
                  <li style={{ marginBottom:10 }}>Wrapped application in a jar file to make it easy for others to launch</li>
                  <a className="btn btn-primary btn-width" style={{display: "block", margin: "auto"}} href="https://github.com/aramirez23/Action-RPG-CSC-413-">GitHub Respository</a>
                </ul>
              </Stack>
            </Col>
          </Row>
        </Container>
      );
}

export default ActionRPG;
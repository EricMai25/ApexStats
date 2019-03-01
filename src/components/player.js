import React from "react";
import { Container, Row, Col, Image, Tab, Tabs } from "react-bootstrap";
import "./player.css";

const player = ({ play }) => {
  let dmg = a => {
    return "damage_" + a;
  };
  let kill = a => {
    return "kills_" + a;
  };
  let head = a => {
    return "headshots_" + a;
  };
  let legends = [
    "Bangalore",
    "Bloodhound",
    "Gibraltar",
    "Lifeline",
    "Mirage",
    "Pathfinder",
    "Wraith",
    "Caustic"
  ];
  let i = 0;
  return (
    <Container className="playerSearch">
      {console.log(play)}
      <Container>
        <Row>
          <Col>
            <Container className="user">
              <Image
                className="avatar"
                src={play.avatar}
                height="100"
                width="100"
                roundedCircle
              />
              <h1 className="playername">{play.name}</h1>
            </Container>
          </Col>
          <Col>
            <h1 className="rank"> Rank : {play.globalrank}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <h3>Recently Played: {play.legend}</h3>
              <Image
                src={`https://s3-us-west-1.amazonaws.com/apexprojectem/images/${
                  play.legend
                }.png`}
                height="300"
                width="250"
              />
            </Container>
          </Col>
          <Col>
            <h4>{play.legend} Stats: </h4>
            <h6>Damage: {play[dmg(play.legend)]}</h6>
            <h6>Headshots: {play[head(play.legend)]}</h6>
            <h6>Kills: {play[kill(play.legend)]}</h6>
          </Col>
          <Col>
            <h4>Total: </h4>
            <h6>Damage: {play.damage}</h6>
            <h6>Headshots: {play.headshots}</h6>
            <h6>Kills: {play.kills}</h6>
          </Col>
        </Row>
      </Container>
      <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
        {legends.map((legend) => {
          if (legend === play.legend) {
            return null;
          }
          i++
          return (
            <Tab className='tabie' eventKey={i} title={legend}>
              <Row>
                <Col>
                  <Container>
                    <h6>{legend}</h6>

                    <Image
                      src={`https://s3-us-west-1.amazonaws.com/apexprojectem/images/${legend}.png`}
                      height="300"
                      width="250"
                    />
                  </Container>
                </Col>
                <Col>
                  <h4>{legend} Stats: </h4>
                  <h6>Damage: {play[dmg(legend)]}</h6>
                  <h6>Headshots: {play[head(legend)]}</h6>
                  <h6>Kills: {play[kill(legend)]}</h6>
                </Col>
              </Row>
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default player;

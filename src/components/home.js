import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, ListGroup } from "react-bootstrap";
import "./home.css";

const home = ({ home, single }) => {
  return (
    <div className="homediv">
      <h1 className="homeTitle">Top Players</h1>
      <CardGroup className="Top">
        {home.map(player => {
          return (
            <Card className="player">
              <Link
                style={{ textDecoration: "none" , color: 'white' }}
                to={player.name}
                onClick={() => {
                  single(player.aid);
                }}
              >
                <Card.Body>
                  <Card.Title>{player.name}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={`https://s3-us-west-1.amazonaws.com/apexprojectem/images/${
                      player.legend
                    }.png`}
                  />
                  <Card.Text>Total Damage : {player.damage}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          );
        })}
      </CardGroup>
      <CardGroup className='others'>
      <Card>
          <ListGroup>
            <Card.Title>People to Watch</Card.Title>
            <ListGroup.Item>SeaGull</ListGroup.Item>
            <ListGroup.Item>AnneMunition</ListGroup.Item>
            <ListGroup.Item>KingRichard</ListGroup.Item>
            <ListGroup.Item>Dakotaz</ListGroup.Item>
            <ListGroup.Item>TimtheTatman</ListGroup.Item>
          </ListGroup>
        </Card>
      </CardGroup>

    </div>
  );
};

export default home;

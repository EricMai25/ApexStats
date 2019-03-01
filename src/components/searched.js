import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, Image } from "react-bootstrap";
import "./searched.css";
const Searched = ({ allPlayer, single }) => {
  if (!allPlayer) {
    return (
    <Card className ='playerCard'>
      <ListGroup variant='flush'>
      <Card.Header>Players</Card.Header>
      <ListGroup.Item>No Player</ListGroup.Item>
      </ListGroup>
    </Card>

    )
  }
  return (
    <Card className='playerCard'>
      <ListGroup variant="flush">
      <Card.Header>Players</Card.Header>
      {allPlayer.map(player=>{
        return(
          <Link style={{ textDecoration: 'none' }}
          to={player.name}
          onClick={() => {
            single(player.aid);
          }}
        >
          <ListGroup.Item>
          <Image src={player.avatar} rounded height='50' width='50'/>
          {player.name}
          </ListGroup.Item>
        </Link>
        )
      })}
      </ListGroup>
    </Card>

    // <div>
    //   {allPlayer.map(player => {
    //     return (
    //       <div>

    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Searched;

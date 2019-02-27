import React from "react";

const home = ({ home }) => {
  return (
    <div>
      {home.map(player => {
        return (
          <div>
              {console.log(home)}
            <p>{player.name}</p>
            <p>{player.legend}</p>
            <img src={player.avatar} alt='topPlayer' height='50' width='50'/>
            <p>Total Damage : {player.damage}  </p>
          </div>
        );
      })}
    </div>
  );
};

export default home;

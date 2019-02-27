import React from "react";

const player = ({ play }) => {
  return (
    <div>
      <p>{play.legend}</p>
      {/* <img src={play.avatar}/> */}
    </div>
  );
};

export default player;

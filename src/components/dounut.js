import React from "react";
import { Doughnut } from "react-chartjs-2";

const Dough = ({ legend, kills }) => {
  return (
    <div>
      <Doughnut
        width={100}
        height={100}
        option={{ maintainAspectRatio: false }}
        data={{
          labels: legend,
          datasets: [
            {
              data: kills,
              backgroundColor: [
                "rgb(147, 48, 5, 0.6)",
                "rgb(246, 23, 23, 0.6)",
                "rgb(248, 163, 77, 0.6)",
                "rgb(51, 214, 239, 0.6)",
                "rgb(241, 238, 59, 0.6)",
                "rgb(38, 106, 216, 0.6)",
                "rgb(207, 80, 245, 0.6)",
                "rgb(107, 174, 39, 0.6)"
              ]
            }
          ]
        }}
      />
    </div>
  );
};

export default Dough;

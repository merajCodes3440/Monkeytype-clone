import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend  
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend  
);


function Graph({graphData}) {
  return (
   <>
      <Line data={
        {
             labels : graphData.map(i=>i[0]),
            // labels: [1,2,3,4],
            datasets:[
                {
                    data: graphData.map(i=>i[1]),
                   // data: [3,4,7,3,1,6],
                    label: "WPM",
                    borderColor:"red"
                },
            ]
        }
      }>

      </Line>
   </>
  )
}

export default Graph
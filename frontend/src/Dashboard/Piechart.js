import {Chart as ChartJS,ArcElement , Tooltip,Legend} from 'chart.js';
import React from 'react'
import {Pie} from 'react-chartjs-2';
import { UserData } from './UserData';
import { Background } from 'react-parallax';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);



const Piechart = () => {

    const data = {
        labels: UserData.map((data) => data.topic),
        datasets:[
            {
                data: UserData.map((data) => data.percent),
                backgroundColor:['#9BDD7C','rgb(238, 132, 132)','rgb(246, 220, 125)']
            }
        ]
    };

    const options={
        plugins: {
            legend: {
              position: 'right',
           
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
              },
            },
          },
    };

  return (
    <div className='app'>
       <div > 
        <Pie data={data} options={options}></Pie>
       </div>
    </div>
  )
}

export default Piechart
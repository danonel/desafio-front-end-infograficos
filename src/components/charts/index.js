import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import './styles.css';

export default function Charts() {
const refContainer = useRef(null)


useEffect(()=>{
    const myChartRef = refContainer.current
    
    
         new Chart(myChartRef, {
        type: 'bar',
        data: {
            labels: ['Governo', 'Carnaval', 'Férias', 'Esporte', 'Outros'],
            datasets: [{
                label: 'Mais vistos',
                data: [12, 8, 5, 3, 2, 1],
                backgroundColor: [
                    '#B22D30',
                    '#111',
                    '#111',
                    '#111',
                    '#111',
                    '#111',      
                    ],
               
               
            }]
        },
    
        options:
            {
                legend:
                {
                    display: false,
                },
          scales: {
            xAxes:  [{
                gridLines:  {
                 color: 'rgba(0,0,0,0)'
                }
            }],  
            yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }   
          }]
        }
            
        }
    });  

}, [])


  return (
    <div className="editoriaisContent">
            <div className="charts">    
                <h2>Editoriais mais acessados</h2>
                <canvas ref={refContainer}></canvas>
            </div>
            <div className="chartsText">
                <h3>Título aqui</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
    </div>
       
  );
}





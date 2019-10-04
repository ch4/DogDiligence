import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonDatetime,
    IonButton
    } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
// import * as d3 from 'd3-selection';
import * as d3 from 'd3'
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { AreaChart } from 'react-d3-components'

//   import './Home.css';
  
const FinancePage: React.FC = () => {
//     d3.select('#chart').style('background-color', 'blue')
//     var margin = {top: 20, right: 20, bottom: 30, left: 40},
//     width = 300 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;

// var x = d3.scaleLinear()
//     .range([0, width]);

// var y = d3.scaleLinear()
//     .range([height, 0]);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")
// 	.tickPadding(10)
// 	.outerTickSize(3)
// 	.ticks(7)
//     .tickFormat(d3.format("d"));

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .outerTickSize(0)
//     .ticks(8)
//     .tickFormat(function(d) { return d; });

// var commentBox = d3.select("body").append("div")   
//     .attr("class", "comment")               
//     .style("opacity", 0);


// d3.csv("us_homeownership_rates.csv", ready);

// function ready(error, data) {
// 	if (error) throw error;

// 	console.log(data);
   
// 	data.forEach(function(d) {
// 		d.avg = +d.annual_avg;
// 	});

// 	var svg = d3.select("#chart").append("svg")
// 	    .attr("width", width + margin.left + margin.right)
// 	    .attr("height", height + margin.top + margin.bottom)
// 	  	.append("g")
// 	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// 	x.domain(d3.extent(data, function(d) { return d.year; }));
//   	y.domain(d3.extent(data, function(d) { return d.avg; }));

//   	svg.append("g")
//       	.attr("class", "x axis")
//       	.attr("transform", "translate(0," + height + ")")
//       	.call(xAxis)
//     	.append("text")
//       	.attr("class", "label")
//       	.attr("x", width)
//       	.attr("y", -6)
//       	.style("text-anchor", "end")
//       	.text("Year");

//   	svg.append("g")
//       	.attr("class", "y axis")
//       	.call(yAxis)
//     	.append("text")
//       	.attr("class", "label")
//       	.attr("transform", "rotate(-90)")
//       	.attr("y", 6)
//       	.attr("dy", ".71em")
//       	.style("text-anchor", "end")
//       	.text("Annual Average Rates (%)");

//     var line = d3.svg.line()
//         .x(function(d) { return x(d.year); })
//         .y(function(d) { return y(d.avg); });

//     svg.append("path")
//       .datum(data)
//       .attr("class", "line")
//       .attr("d", line);

//     var comment = "Obama takes office";

//     svg.selectAll("circle")
//         .data(data)
//         .enter().append("circle")
//         .filter(function(d) { return d.year == '2008' })
//         .attr("class", "circle")
//         .attr("r", 4)
//         .attr("cx", function(d) { return x(d.year); })
//         .attr("cy", function(d) { return y(d.avg); })       
//         .on("click", function(d) {
//             commentBox.text( function() { return comment; })
//             .style("opacity", 0.8)
//             .style("left", (d3.event.pageX)-0 + "px") 
//             .style("top", (d3.event.pageY)-0 + "px");
//         })
//         .each(update);  

//     function update() {
//     var circle = d3.selectAll(".circle");        
//         (function repeat() {
//             circle
//                 .transition()
//                 .duration(1500)
//                 .attr("stroke-width", 10)
//                 .attr("r", 10)
//                 .style("opacity", 0)
//                 .transition()
//                 .duration(0)
//                 .attr("stroke-width", 0)
//                 .attr("r", 6)
//                 .style("opacity", 1)
//                 .each("end", repeat);
//         })();
//     }
    
// };
var data = [
    {
    label: 'somethingA',
    values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
    },
    {
    label: 'somethingB',
    values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
    }
];

    var tooltipArea = function(y, cumulative, x, label) {
        return label + " Total: " + cumulative + " X: " + x + " Y: " + y;
    }
    
    return (
        <IonPage>
        <IonHeader>
            {/* <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Finance</IonTitle>
            </IonToolbar> */}
        </IonHeader>
        <IonContent>
            <div>
            <div id="chart">
            <AreaChart
                data={data}
                width={window.innerWidth}
                height={400}
                yOrientation='left' // if you do not provide right default left orientation for yAxis will be used
                margin={{top: 10, bottom: 50, left: 30, right: 20}}
                tooltipHtml={tooltipArea}
                />
            </div>
            </div>
        </IonContent>
        </IonPage>
    );
};

export default FinancePage;
  
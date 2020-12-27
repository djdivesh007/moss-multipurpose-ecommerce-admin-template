var sparkChart;

$(function() {

    'use strict';

    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];


    var randomizeArray = function(arg) {
        var array = arg.slice();
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // The Default colorPalette for this dashboard
    var colorPalette = ['#3f51b5', '#008FFB', '#FEB019', '#FF4560', '#775DD0']

 

    var spark1 = {
        series: [{
              name: 'Heart Beat',
            data: data.slice()
        }],
        chart: {
            id: 'realtime',

            type: 'area',
            height: 160,
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
             toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
 dataLabels: {
          enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            opacity: 1,
        },
        // series: [{
        //     name: 'Live',
        //     data: randomizeArray(sparklineData)
        // }],
        // labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        yaxis: {
            //min: 0,
            max: 100,
        },
         legend: {
          show: false
        },
         markers: {
          size: 0
        },

        xaxis: {
            type: 'datetime',
             range: XAXISRANGE,
        },
        colors: [themeColors.primary],
        // title: {
        //     text: 'Pulse Monitor',
        //     offsetX: 20,
        //     style: {
        //         fontSize: '24px',
        //         cssClass: 'apexcharts-yaxis-title'
        //     }
        // },
        // subtitle: {
        //     text: 'Critical',
        //     offsetX: 20,
        //     style: {
        //         fontSize: '14px',
        //         cssClass: 'apexcharts-yaxis-title'
        //     }
        // }
    }

   sparkChart = new ApexCharts(document.querySelector("#spark1"), spark1);
    sparkChart.render();


});
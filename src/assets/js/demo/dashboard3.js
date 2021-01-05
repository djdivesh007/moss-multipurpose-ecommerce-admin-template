$(function() {

    'use strict';

    // The Default colorPalette for this dashboard
    let colorPalette = [themeColors.primary, '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

    let options = {
        chart: {
            type: 'area',
            height: 300,
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },  
        stroke: {
            curve: 'stepline',
        },
        dataLabels: {
            enabled: false
        },
        colors: colorPalette,
        series: [{
            data: [15, 60, 40, 71, 10, 0]
        }],
        xaxis: {
          
            categories: [2015, 2016, 2017, 2018, 2019, 2020]
        },
        yaxis: {
          
        }

    };

    let chart = new ApexCharts(document.querySelector('#stepline-chart'), options);
    chart.render();


    let option2 = {
        chart: {
            height: 270,
            type: 'area',
            sparkline: {
                enabled: false,
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: colorPalette,
        series: [
            {
                name: 'Peak Sales',
                data: [45, 52, 38, 45, 19, 23, 2]
            }
        ],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: [
                '01 Jan',
                '02 Jan',
                '03 Jan',
                '04 Jan',
                '05 Jan',
                '06 Jan',
                '07 Jan'
            ]
        }
    };

    let chart2 = new ApexCharts(document.querySelector('#area-chart'), option2);
    chart2.render();
});
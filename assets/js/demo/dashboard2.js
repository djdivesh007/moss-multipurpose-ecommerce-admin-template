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

    var options = {
        chart: {
            type: 'line',
            height: 280,
        },
        colors: colorPalette,
        series: [{
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    /* Line, Column & Area */
    var option4 = {
        series: [{
            name: 'Sales',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'Purchases',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'Profit',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        chart: {
            height: 280,
            type: 'line',
            stacked: false,
        },
        colors: colorPalette,
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },

        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            title: {
                text: 'Points',
            },
            min: 0
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        }
    };

    var chart4 = new ApexCharts(document.querySelector("#line-column-area-chart"), option4);
    chart4.render();

    // Bar Chart
    var optionsBar = {
        chart: {
            type: 'bar',
            height: 280,
            width: '100%',
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
            }
        },
        colors: colorPalette,
        series: [{
            name: "Clothing",
            data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
        }, {
            name: "Food Products",
            data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
        }],
        labels: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: '#78909c'
                }
            }
        },

    }

    var chartBar = new ApexCharts(document.querySelector('#bar-chart'), optionsBar);
    chartBar.render();

    var spark1 = {
        chart: {
            id: 'sparkline1',
            group: 'sparklines',
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: 'Sales',
            data: randomizeArray(sparklineData)
        }],
        labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        yaxis: {
            min: 0
        },
        xaxis: {
            type: 'datetime',
        },
        colors: ['#3f51b5'],
        title: {
            text: '$424,652',
            offsetX: 20,
            style: {
                fontSize: '24px',
                cssClass: 'apexcharts-yaxis-title'
            }
        },
        subtitle: {
            text: 'Sales',
            offsetX: 20,
            style: {
                fontSize: '14px',
                cssClass: 'apexcharts-yaxis-title'
            }
        }
    }

    var spark2 = {
        chart: {
            id: 'sparkline2',
            group: 'sparklines',
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: 'Expenses',
            data: randomizeArray(sparklineData)
        }],
        labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        yaxis: {
            min: 0
        },
        xaxis: {
            type: 'datetime',
        },
        colors: ['#3f51b5'],
        title: {
            text: '$235,312',
            offsetX: 20,
            style: {
                fontSize: '24px',
                cssClass: ''
            }
        },
        subtitle: {
            text: 'Expenses',
            offsetX: 20,
            style: {
                fontSize: '14px',
                cssClass: ''
            }
        }
    }

    var spark3 = {
        chart: {
            id: 'sparkline3',
            group: 'sparklines',
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: 'Profits',
            data: randomizeArray(sparklineData)
        }],
        labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            min: 0
        },
        colors: ['#3f51b5'],
        title: {
            text: '$135,965',
            offsetX: 20,
            style: {
                fontSize: '24px',
                cssClass: 'apexcharts-yaxis-title'
            }
        },
        subtitle: {
            text: 'Profits',
            offsetX: 20,
            style: {
                fontSize: '14px',
                cssClass: 'apexcharts-yaxis-title',

            }
        },

    }

    var monthlyEarningsOpt = {
        chart: {
            type: 'area',
            height: 260,
            background: '#eff4f7',
            sparkline: {
                enabled: true
            },
            offsetY: 20
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            type: 'solid',
            opacity: 1,
        },
        series: [{
            data: randomizeArray(sparklineData)
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        yaxis: {
            min: 0,
            max: 130
        },
        colors: ['#3f51b5'],

        title: {
            text: 'Total Earned',
            offsetX: -30,
            offsetY: 100,
            align: 'right',
            style: {
                color: '#7c939f',
                fontSize: '14px',
                cssClass: 'apexcharts-yaxis-title'
            }
        },
        subtitle: {
            text: '$135,965',
            offsetX: -30,
            offsetY: 100,
            align: 'right',
            style: {
                color: '#7c939f',
                fontSize: '24px',
                cssClass: 'apexcharts-yaxis-title'
            }
        }
    }


    new ApexCharts(document.querySelector("#spark1"), spark1).render();
    new ApexCharts(document.querySelector("#spark2"), spark2).render();
    new ApexCharts(document.querySelector("#spark3"), spark3).render();

    var monthlyEarningsChart = new ApexCharts(document.querySelector("#monthly-earnings-chart"), monthlyEarningsOpt);

});
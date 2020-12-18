$(function() {

    'use strict';

    // The Default colorPalette for this dashboard
    var colorPalette = ['#3f51b5', '#008FFB', '#FEB019', '#FF4560', '#775DD0']

    var options = {
        chart: {
            type: 'line',
            height: 280,

        },
        colors: colorPalette,
        series: [{
            name: 'Sales',
            data: [30, 40, 35, 50, 15, 60, 40, 91, 10]
        }],
        xaxis: {
            title: {
                text: 'Year',
            },

            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        yaxis: {
            title: {
                text: 'Sales Count',
            },
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
            data: [42, 52, 16, 55, 51, 45, 32, 26, 33, 44],
        }, {
            name: "Food Products",
            data: [6, 12, 4, 7, 3, 6, 4, 3, 3, 5],
        }],
        labels: [10, 11, 12, 13, 15, 16, 17, 18, 19, 20],
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


    var optionDonut = {
        series: [44, 55, 67, 83],
        chart: {
            height: 330,
            type: 'radialBar',
            redrawOnParentResize: false
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function(w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    var donut = new ApexCharts(
        document.querySelector("#chart-donut"),
        optionDonut
    )
    donut.render();


});
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
        chart: {
            type: 'donut',
            height: '100%',
            width: '100%',

        },
        colors: ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'],
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 10,
                height: 10,
            },
            itemMargin: {
                horizontal: 5,
                vertical: 8
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '50%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '29px',
                            fontFamily: 'Poppins, sans-serif',
                            color: undefined,
                            offsetY: 0
                        },
                        value: {
                            show: true,
                            fontSize: '26px',
                            fontFamily: 'Poppins, sans-serif',
                            color: '20',
                            offsetY: 0,
                            formatter: function(val) {
                                return val
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            color: '#888ea8',
                            formatter: function(w) {
                                return w.globals.seriesTotals.reduce(function(a, b) {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                }
            }
        },
        stroke: {
            show: true,
            width: 8,
        },
        series: [985, 737, 270],
        labels: ['Apparel', 'Electronic', 'Others'],
        responsive: [{
            breakpoint: 1599,
            options: {
                chart: {
                    width: '300px',
                    height: '300px'
                },
                legend: {
                    position: 'bottom'
                }
            },

            breakpoint: 1439,
            options: {
                chart: {
                    width: '250px',
                    height: '350px'
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '60%',
                        }
                    }
                }
            },
        }]
    }
    var donut = new ApexCharts(
        document.querySelector("#chart-donut"),
        optionDonut
    )
    donut.render();



    var options = {
        chart: {
            height: 350,
            type: "line",
            stacked: false
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
        series: [

            {
                name: 'Column A',
                type: 'column',
                data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
            },
            {
                name: "Column B",
                type: 'column',
                data: [10, 19, 27, 26, 34, 35, 40, 38]
            },
            {
                name: "Line C",
                type: 'line',
                data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
            },
        ],
        stroke: {
            width: [4, 4, 4]
        },
        plotOptions: {
            bar: {
                columnWidth: "20%"
            }
        },
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        },
        yaxis: [{
                seriesName: 'Column A',
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                },
                title: {
                    text: "Columns"
                }
            },
            {
                seriesName: 'Column A',
                show: false
            }, {
                opposite: true,
                seriesName: 'Line C',
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                },
                title: {
                    text: "Line"
                }
            }
        ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        legend: {
            horizontalAlign: "left",
            offsetX: 40
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart-multi-axis"), options);

    chart.render();

});
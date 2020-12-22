$(function() {

    'use strict';

    // The Default colorPalette for this dashboard
    var colorPalette = [themeColors.primary, '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

    var options = {
        chart: {
            type: 'line',
            height: 280,

        },
        colors: themeColors,
        series: [{
            name: 'Sales',
            data: [15, 60, 40, 91, 10, 0]
        }],
        xaxis: {
            title: {
                text: 'Year',
            },

            categories: [2015, 2016, 2017, 2018, 2019, 2020]
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
            data: [23, 11, 22, 27, 13, 22, 37, 21]
        }, {
            name: 'Purchases',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41]
        }, {
            name: 'Profit',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52]
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
            '08/01/2003'
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
            data: [42, 52, 16, 55, 51, 45],
        }, {
            name: "Food Products",
            data: [6, 12, 4, 7, 3, 6],
        }],
        labels: [10, 11, 12, 13, 15, 16],
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


    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),

                ],
                backgroundColor: colorPalette,
                label: 'eCommerce Sales'
            }],
            labels: [
                'Apple',
                'Samsung',
                'Vivo',
                'Oppo',

            ]
        },
        options: {
            responsive: true,
            legend: {
                boxWidth: 10,
                position: 'bottom',
            },

            animation: {
                animateScale: true,
                animateRotate: true
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            cutoutPercentage: 70
        }
    };

    window.onload = function() {
        var ctx = document.getElementById('chart-area').getContext('2d');
        window.myDoughnut = new Chart(ctx, config);
    };

});
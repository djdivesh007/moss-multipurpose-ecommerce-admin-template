$(function() {

    'use strict';
    /*  Line Chart Demo */

    var options = {
        chart: {
            type: 'line'
        },
        colors: ["#3f51b5"],
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


    /*  Chart Area */
    var data = generateDayWiseTimeSeries(new Date("13 Apr 2017").getTime(), 115, {
        min: 30,
        max: 90
    });
    var options1 = {
        chart: {
            id: "chart2",
            type: "area",
            height: 300,
            foreColor: "#000",
            toolbar: {
                autoSelected: "pan",
                show: false
            }
        },
        colors: ["#3f51b5"],
        stroke: {
            width: 3
        },
        grid: {
            borderColor: "#555",
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0
            }
        },
        markers: {
            size: 5,
            colors: ["#000524"],
            strokeColor: "#3f51b5",
            strokeWidth: 3
        },
        series: [{
            data: data
        }],
        tooltip: {
            theme: "dark"
        },
        xaxis: {
            type: "datetime"
        },
        yaxis: {
            min: 0,
            tickAmount: 4
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);
    chart1.render();

    /* Bar Chart */

    var options2 = {
        chart: {
            id: "chart1",
            height: 300,
            type: "bar",
            foreColor: "#3f51b5",
            brush: {
                target: "chart2",
                enabled: true
            },
            selection: {
                enabled: true,
                fill: {
                    color: "#000",
                    opacity: 0.4
                },
                xaxis: {
                    min: new Date("27 Jul 2017 10:00:00").getTime(),
                    max: new Date("14 Aug 2017 10:00:00").getTime()
                }
            }
        },
        colors: ["#3f51b5"],
        series: [{
            data: data
        }],
        stroke: {
            width: 2
        },
        grid: {
            borderColor: "#000"
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: "datetime",
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            tickAmount: 2
        }
    };

    var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

    chart2.render();

    function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }


    /*  Radar Chart */
    var option3 = {
        chart: {
            id: "chart4",
            height: 300,
            type: "radar",
            foreColor: "#3f51b5",

        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColor: '#e8e8e8',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        markers: {
            size: 5,
            hover: {
                size: 10
            }
        },
        series: [{
                name: "Sales",
                data: [45, 52, 38, 24, 33, 10]
            },
            {
                name: "Purchase",
                data: [26, 21, 20, 6, 8, 15]
            }
        ],
        labels: ['April', 'May', 'June', 'July', 'August', 'September']
    }

    var chart3 = new ApexCharts(document.querySelector("#chart-candlestick"), option3);
    chart3.render();

})
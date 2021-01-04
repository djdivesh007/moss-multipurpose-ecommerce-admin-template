let sparkChart;

$(function() {

    'use strict';

    let lastDate = 0;
    let data = [];
    let TICKINTERVAL = 86400000;
    let XAXISRANGE = 777600000;

    let spark1 = {
        series: [{
            name: 'Heart Beat',
            data: data.slice()
        }],
        chart: {
            id: 'realtime',
            type: 'area',
            height: 150,
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

        yaxis: {
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

    };

    sparkChart = new ApexCharts(document.querySelector('#spark1'), spark1);
    sparkChart.render();


   

    function getDayWiseTimeSeries(baseval, count, yrange) {
        let i = 0;
        while (i < count) {
            let x = baseval;
            let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            data.push({
                x,
                y
            });
            lastDate = baseval;
            baseval += TICKINTERVAL;
            i++;
        }
    }

    getDayWiseTimeSeries(new Date('11 Feb 2020 GMT').getTime(), 10, {
        min: 10,
        max: 90
    });

    function getNewSeries(baseval, yrange) {
        let newDate = baseval + TICKINTERVAL;
        lastDate = newDate;

        for (let i = 0; i < data.length - 10; i++) {
            // IMPORTANT
            // we reset the x and y of the data which is out of drawing area
            // to prevent memory leaks
            data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
            data[i].y = 10;
        }

        data.push({
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
    }

    window.setInterval(function() {
        if (!data) return;
        getNewSeries(lastDate, {
            min: 10,
            max: 70
        });
        sparkChart.updateSeries([{
            data: data,
        }]);
    }, 1000);


    // Calendar Scripts
    let calendar;
    
    let calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2020-12-07',
        themeSystem: 'bootstrap',
        eventColor: '#3f51b5',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        dateClick: function(info) {
            console.log(info);
        },
    });
    calendar.render();
    

});
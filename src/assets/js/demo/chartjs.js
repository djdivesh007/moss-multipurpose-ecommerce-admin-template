$(function(){
 
    const color = Chart.helpers.color;
    const presets = window.chartColors; //Radar
    const utils = Samples.utils; //Radar
    const inputs = {
        min: 8,
        max: 16,
        count: 8,
        decimals: 2,
        continuity: 1
    };
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: 'Dataset 2',
            backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]

    };
    const lineChartConfig = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
                fill: false,
            }, {
                label: 'My Second dataset',
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    };

    function generateDataForRadar() {
        // radar chart doesn't support stacked values, let's do it manually
        let values = utils.numbers(inputs);
        inputs.from = values;
        return values;
    }

    function generateLabelsForRadar() {
        return utils.months({
            count: inputs.count
        });
    }
    const radarOptions = {
        maintainAspectRatio: true,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001
            }
        }
    };
    const radarData = {
        labels: generateLabelsForRadar(),
        datasets: [{
            backgroundColor: utils.transparentize(presets.red),
            borderColor: presets.red,
            data: generateDataForRadar(),
            label: 'D0'
        }, {
            backgroundColor: utils.transparentize(presets.orange),
            borderColor: presets.orange,
            data: generateDataForRadar(),
            hidden: true,
            label: 'D1',
            fill: '-1'
        }, {
            backgroundColor: utils.transparentize(presets.yellow),
            borderColor: presets.yellow,
            data: generateDataForRadar(),
            label: 'D2',
            fill: 1
        }, {
            backgroundColor: utils.transparentize(presets.green),
            borderColor: presets.green,
            data: generateDataForRadar(),
            label: 'D3',
            fill: false
        }, {
            backgroundColor: utils.transparentize(presets.blue),
            borderColor: presets.blue,
            data: generateDataForRadar(),
            label: 'D4',
            fill: '-1'
        }, {
            backgroundColor: utils.transparentize(presets.purple),
            borderColor: presets.purple,
            data: generateDataForRadar(),
            label: 'D5',
            fill: '-1'
        }]
    };

    const barLineComboData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: window.chartColors.blue,
            borderWidth: 2,
            fill: false,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: window.chartColors.green,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]

    };

    window.onload = function() {
        const ctx1 = document.getElementById('chartjs-01').getContext('2d');
        window.myBar = new Chart(ctx1, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        });
        const ctx2 = document.getElementById('chartjs-02').getContext('2d');
        window.myLine = new Chart(ctx2, lineChartConfig);
        const ctx3 = document.getElementById('chartjs-03').getContext('2d');
        window.myLine = new Chart(ctx3, {
            type: 'radar',
            data: radarData,
            options: radarOptions
        });
        const ctx4 = document.getElementById('chartjs-04').getContext('2d');
        window.myBarLineChart = new Chart(ctx4, {
            type: 'bar',
            data: barLineComboData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Combo Bar Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                }
            }
        });
    };
});
$(function (){

    'use strict';
    let basic_input = document.getElementById('basic_input');
    let basic_picker = new Picker(basic_input, {
        format: 'YYYY-MM-DD HH:mm',
    });
        
    let date_input = document.getElementById('date_input');
    let date_picker = new Picker(date_input, {
        format: 'YYYY-MM-DD',
    });
    date_picker.getDate(true);

    let time_input = document.getElementById('time_input');
    let time_picker = new Picker(time_input, {
        format: 'HH:mm',
    });
   
    let colorWheel = new iro.ColorPicker('#colorWheelDemo', {
        width: 200,
        layout: [{
            component: iro.ui.Wheel,
            options: {
                wheelLightness: true,
                wheelAngle: 0,
                wheelDirection: 'anticlockwise'
            }
        }],
        layoutDirection: 'horizontal',

    });

    colorWheel.on('color:change', function(color) {
        // log the current color as a HEX string
        $('#selected_color').val(color.hexString);
        console.log(color.hexString);
    });
});
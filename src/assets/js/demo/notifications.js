$(function (){

    'use strict';

    $(document).on('click', '.demo-basic-notification', function () {
        toastr.info('Are you the 6 fingered man?');
    });
    $(document).on('click', '.demo-warning-notification', function () {
        toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
    });
    $(document).on('click', '.demo-success-notification', function () {
        toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {
            timeOut: 5000
        });
    });
    $(document).on('click', '.demo-error-notification', function () {
        toastr.error('We do have the Kapua suite available.', 'Turtle Bay Resort');
    });

    $(document).on('click', '.demo-close-notification', function () {
        toastr.options.closeButton = true;
        toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {
            timeOut: 5000
        });
    });
    $(document).on('click', '.demo-permanent-notification', function () {
        toastr.options.timeOut = 0;
        toastr.options.extendedTimeOut = 0;
        toastr.success('Toast Wont Close', 'Turtle Bay Resort');
    });
    $(document).on('click', '.demo-progress-notification', function () {
        toastr.options.progressBar = true;
        toastr.info('Toast with Progress bar', 'Turtle Bay Resort');
    });
    $(document).on('click', '.demo-multiple-notification', function () {
        toastr.error('We do have the Kapua suite available.', 'Turtle Bay Resort');
    });


    function Toast(type, css, msg) {
        this.type = type;
        this.css = css;
        this.msg = 'This is positioned in the ' + msg + '. You can also style the icon any way you like.';
    }

    let toasts = [
        new Toast('error', 'toast-bottom-full-width',
            'This is positioned in the bottom full width. You can also style the icon any way you like.'),
        new Toast('info', 'toast-top-full-width', 'top full width'),
        new Toast('warning', 'toast-top-left',
            'This is positioned in the top left. You can also style the icon any way you like.'),
        new Toast('success', 'toast-top-right', 'top right'),
        new Toast('warning', 'toast-bottom-right', 'bottom right'),
        new Toast('error', 'toast-bottom-left', 'bottom left')
    ];


    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.timeOut = 1000;
    toastr.options.fadeOut = 250;
    toastr.options.fadeIn = 250;

    let i = 0;

    $(document).on('click','#tryMe', function () {
        $('#tryMe').prop('disabled', true);
        delayToasts();
    });

    function delayToasts() {
        if (i === toasts.length) {
            return;
        }
        let delay = i === 0 ? 0 : 2100;
        window.setTimeout(function () {
            showToast();
        }, delay);

        // re-enable the button
        if (i === toasts.length - 1) {
            window.setTimeout(function () {
                $('#tryMe').prop('disabled', false);
                i = 0;
            }, delay + 1000);
        }
    }

    function showToast() {
        let t = toasts[i];
        toastr.options.positionClass = t.css;
        toastr[t.type](t.msg);
        i++;
        delayToasts();
    }
});
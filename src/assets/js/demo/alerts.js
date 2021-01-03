$(function (){

    'use strict';
    

    $(document).on('click', '.basic-alert', function () {
        Swal.fire('Hello world!');
    });
    $(document).on('click', '.success-alert', function () {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        );
    });
    $(document).on('click', '.success-toast-alert', function () {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });

        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        });
    });

        
});
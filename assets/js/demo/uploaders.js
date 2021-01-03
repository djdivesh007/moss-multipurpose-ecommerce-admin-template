$(function (){

    'use strict';

    $('.dropify').dropify({
        messages: {
            'default': 'Drag and drop a file here or click',
            'replace': 'Drag and drop or click to replace',
            'remove': 'Remove',
            'error': 'Ooops, something wrong happended.'
        },
        tpl: {
            clearButton: '<button type="button" class="dropify-clear btn-primary">{{ remove }}</button>',
        }
    });
});
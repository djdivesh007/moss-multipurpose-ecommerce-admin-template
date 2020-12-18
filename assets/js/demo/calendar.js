$(function(){

      'use strict';
     var calendar;
        document.addEventListener('DOMContentLoaded', function() {

            var calendarEl = document.getElementById('calendar');
            calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                initialDate: '2020-12-07',
                themeSystem: 'bootstrap',
                selectable: true,
                editable: true,
                droppable: true,
                businessHours: true,
                nowIndicator: true,
                eventColor: '#3f51b5',

                headerToolbar: {
                    left: 'prev,next today addEventButton',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                customButtons: {
                    addEventButton: {
                        text: 'add event',
                        icon: 'fa-plus',
                        click: function() {
                            addEvent('');
                        }
                    }
                },

                dateClick: function(info) {
                    console.log(info);
                    addEvent(info.dateStr);
                },
                drop: function(info) {
                    // is the "remove after drop" checkbox checked?
                    if (checkbox.checked) {
                        // if so, remove the element from the "Draggable Events" list
                        info.draggedEl.parentNode.removeChild(info.draggedEl);
                    }
                },
                events: [{
                    title: 'All Day Event',
                    start: '2020-12-01'
                }, {
                    title: 'Long Event',
                    start: '2020-12-07',
                    end: '2020-12-10'
                }, {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2020-12-09T16:00:00'
                }, {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2020-12-16T16:00:00'
                }, {
                    title: 'Conference',
                    start: '2020-12-11',
                    end: '2020-12-13'
                }, {
                    title: 'Meeting',
                    start: '2020-12-12T10:30:00',
                    end: '2020-12-12T12:30:00'
                }, {
                    title: 'Lunch',
                    start: '2020-12-12T12:00:00'
                }, {
                    title: 'Meeting',
                    start: '2020-12-12T14:30:00'
                }, {
                    title: 'Birthday Party',
                    start: '2020-12-13T07:00:00'
                }, {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2020-12-28'
                }]
            });

            calendar.render();

            var Draggable = FullCalendar.Draggable;

            new Draggable(containerEl, {
                itemSelector: '.fc-event',
                eventData: function(eventEl) {
                    return {
                        title: eventEl.innerText
                    };
                }
            });
        });
});
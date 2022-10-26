$(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var value = $(this).siblings('.eventworkspace').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, value);
  
      $('.update').addClass('updateShow');

      setTimeout(function () {
        $('.update').removeClass('updateShow');
      }, 5000);
    });

function updateHour() {
    var currentHour = moment().hours();

    $('.time-block').each(function () {
      var rowHour = parseInt($(this).attr('id').split('-')[1]);

      if (rowHour < currentHour) {
        $(this).addClass('past');
      } else if (rowHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  updateHour();

  var interval = setInterval(updateHour, 15000);

  $('#8AM .description').val(localStorage.getItem('8AM'));
  $('#9AM .description').val(localStorage.getItem('9AM'));
  $('#10AM .description').val(localStorage.getItem('10AM'));
  $('#11AM .description').val(localStorage.getItem('11AM'));
  $('#12PM .description').val(localStorage.getItem('12PM'));
  $('#1PM .description').val(localStorage.getItem('1PM'));
  $('#2PM .description').val(localStorage.getItem('2PM'));
  $('#3PM .description').val(localStorage.getItem('3PM'));
  $('#4PM .description').val(localStorage.getItem('4PM'));
  $('#5PM .description').val(localStorage.getItem('5PM'));
  $('#6PM .description').val(localStorage.getItem('6PM'));
  $('#7PM .description').val(localStorage.getItem('7PM'));
  $('#8PM .description').val(localStorage.getItem('8PM'));

  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});

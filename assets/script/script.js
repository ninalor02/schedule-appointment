// ----> this is for the current live day and Date <---- //


// date display
// console.log('testing1'); //working//

$(function () {

  var dayWeek = dayjs();

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  $('#currentDay').text(dayWeek);

});
// --> this is current live hours <---- //



//  --> This is for the save button to local storage <-- //


var textArea = $('#textArea');
var saveBtn = $('.saveBtn');


function scheduleFromStorage() {

  var hour9 = localStorage.getItem('hour-9');
  if (hour9) {
    $('#hour-9 .description').val(hour9);
  }
  var hour10 = localStorage.getItem('hour-9');
  if (hour10) {
    $('#hour-9 .description').val(hour9);
  }
  var hour11 = localStorage.getItem('hour-9');
  if (hour11) {
    $('#hour-9 .description').val(hour9);
  }
  var hour12 = localStorage.getItem('hour-9');
  if (hour12) {
    $('#hour-9 .description').val(hour9);
  }
  var hour1 = localStorage.getItem('hour-9');
  if (hour1) {
    $('#hour-9 .description').val(hour9);
  }
  var hour2 = localStorage.getItem('hour-9');
  if (hour2) {
    $('#hour-9 .description').val(hour9);
  }
  var hour3 = localStorage.getItem('hour-9');
  if (hour3) {
    $('#hour-9 .description').val(hour9);
  }
  var hour4 = localStorage.getItem('hour-9');
  if (hour4) {
    $('#hour-9 .description').val(hour9);
  }
  var hour5 = localStorage.getItem('hour-9');
  if (hour5) {
    $('#hour-9 .description').val(hour9);
  }
}

saveBtn.on("click", function (event) {
  event.preventDefault();

  var textArea = $(this).siblings('.description').val();
  var timeBlock = $(this).parent().attr("id");
  console.log(timeBlock); 

  localStorage.setItem("timeBlock", textArea);

});







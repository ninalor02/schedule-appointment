// ----> this is for the current live day and Date <---- //

// date display
// console.log('testing1'); //working//

$(function () {
  //testing purpose only console.log within the funciton
//  console.log('testing2'); //working//

  // current day of the week //
  var dayWeek = dayjs();
//  console.log('dayWeek'); //working//
  // current date //
  var today = dayjs();
//  console.log('today', today.format('MMM D, YYYY')); //working//

  $('#currentDay').text(today.format('MMM D, YYYY'));
//  console.log('#currentDay', $('#currentDay')); //working//

  $('#currentDay').text(dayWeek);
//  console.log('dayWeek1') //working//

});
// --> this is current live hours <---- //



//  --> This is for the save button to local storage <-- //


var textArea = $('#textArea');
var saveBtn = $('.saveBtn');
// console.log('#textArea', textArea);  //working//
// console.log('.saveBtn', saveBtn);   //working//

function scheduleFromStorage() {
// console.log('schedule send to storage');  //working//
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
scheduleFromStorage()

saveBtn.on("click", function (event) {
  event.preventDefault();


  //saveBtn.on('click', function (event) {  
//  console.log('appt saved', event.target);  // <--- jquery object, children, etc //
//  console.log('appt saved', $(this));

  var textArea = $(this).siblings('.description').val();
//  console.log(textDescription); //working//

  var timeBlock = $(this).parent().attr("id");
console.log(timeBlock);  //not working --> only saving under as timeblock//

  localStorage.setItem("timeBlock", textArea);


});







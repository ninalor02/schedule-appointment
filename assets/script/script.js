// ----> this is for the current live day and Date <---- //

// date display
console.log('testing1'); //working//

$(function () {
  //testing purpose only console.log within the funciton
console.log('testing2'); //working//

  // current day of the week //
var dayWeek = dayjs();
console.log('dayWeek'); //working//
// current date //
var today = dayjs();
console.log('today', today.format('MMM D, YYYY')); //working//

$('#currentDay').text(today.format('MMM D, YYYY'));
console.log('#currentDay', $('#currentDay')); //working//

$('#currentDay').text(dayWeek);
console.log('dayWeek1') //working//

});
// --> this is current live hours <---- //



//  --> This is for the save button to local storage <-- //


var textArea = $('#textArea');
var saveBtn = $('.saveBtn');
console.log('#textArea', textArea);  //working//
console.log('.saveBtn', saveBtn);   //working//


saveBtn.on("click", function(event) {
  event.preventDefault();


//saveBtn.on('click', function (event) {  
console.log('appt saved', event.target);  // <--- jquery object, children, etc //
console.log('appt saved', $(this));

// $('col-8 col-md-10 description').siblings(event);

var textDescription = $(this).siblings('.description').val();
console.log(textDescription); //working//

var rowTimeBlock = $(this).parent().attr("id");
console.log(rowTimeBlock);  //unsure//

localStorage.setItem("rowTimeBlock", textDescription);


});






  
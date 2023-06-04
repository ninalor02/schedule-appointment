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

saveBtn.on('click', function (event) {  
console.log('save appointment', event.target);  // <--- jquery object, children, etc //
console.log('save appointment', $(this));

// $('col-8 col-md-10 description').siblings(event);

var textDescription = $(this).siblings('.description')
console.log(textDescription);

//localStorage.setItem('appointment', JSON.stringify(event));

});









  
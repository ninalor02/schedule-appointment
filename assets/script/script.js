// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // * TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // * TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // * TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

/*

. - class
# - id
li - tag
*/

// date display
console.log('testing');


$(function () {
  //testing purpose only
  console.log('testing'); 

  // live dates //
var today = dayjs();
console.log('var today', today.format('MMM D, YYYY'));

$('#currentDay').text(today.format('MMM D, YYYY'));
console.log('#currentDay', $('#currentDay'));

// live hours // 
var currentHour=dayjs().format('h') 
console.log('currentHour', currentHour);

dayjs().hour() // gets current hour
newDate = dayjs().hour(12) // returns new dayjs object

//future hours
var futureHour=dayjs().format('h') 
console.log('futureHour', futureHour);

dayjs().hour() 
newDate = dayjs().hour(+12)

//past hours  testing - good
var pastHour=dayjs().format('h') 
console.log('pastHour', pastHour);

//testing past hours

var pastHour=dayjs.extend('h')
console.log('pastHour', pastHour);

});
/* need to for loop 

if (currentHour is greater then id  change class to future)
else if( currehour is = id change class to present)
default (else) class should be past
*/

/*  --------- > need to fix this part on JS

var currentHour = document.querySelector("#currentHour");
var pastHour = document.querySelector("#pastHour");
var futureHour= document.querySelector("#futureHour");

var currentHour = localStorage.getItem("#currentHour");
console.log('#currentHour', currentHour);
*/

var pastHour = document.querySelectorAll("#pastHour");
var currentHour = document.querySelector("#currentHour");
var futureHour = document.querySelectorAll("#futureHour");


currentHour.addEventListener("click", function() {
  if (currentHour < futureHour ) {
    
    localStorage.setItem("#currentHour", currentHour);
  }
});








  
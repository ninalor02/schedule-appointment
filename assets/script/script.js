

// date display
console.log('testing');


$(function () {
  //testing purpose only console.log within the funciton
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

// just added this after tutor//

//future hours -- good
var futureHour=dayjs().format('h') 
console.log('futureHour', futureHour);

//testing -- > this will add current hour into the notes on 9AM box//
$('#9').text(today.format('h'));
console.log('#9', $('#9'));

for (let hour = 0; hour < hour.length; index++) {
  const element = array[index];
  
  dayjs().hour() 
  newDate = dayjs().hour(+12)
  
  //past hours  testing - good
  var pastHour=dayjs().format('h') 
  console.log('pastHour', pastHour);
  
  //testing past hours- need fixing
  
  var pastHour=dayjs.extend('h')
  console.log('pastHour', pastHour);
  
}
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












  
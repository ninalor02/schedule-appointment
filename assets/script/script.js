// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    

    // Variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); // Variable for current hour 
var currentHourInt = parseInt(currentHour); // Parse it so that hour returns as an integer

// Set data attributes to each hour input element so that the function below can assign a color to each row based on the current hour
$("hour-9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("hour-10").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("hour-11").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("hour-12").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("hour-1").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("hour-2").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("hour-3").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("hour-4").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("hour-5").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

//start jQuery 
$(document).ready(function () {

    // Function to store inputted data 
    renderPlans();

  // Show Date and Time in Header 
  $("#currentDay").append();

  function addDate() { 
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
  
  } setInterval(addDate, 1000);

  // Change color in each row by adding in am attribute (above) for each input line to reflect the current hour 
  for (var i = 0; i <= 12; i++) {  

      var inputHour = $("#" + i + "Row").attr("data-time"); // Variable for the hour of the row 
      var inputHourInt = parseInt(inputHour); // Parse it so that hour returns as an integer

      if (currentHourInt === inputHourInt) {
          $("#" + i + "Row").addClass("present"); // Applies red color if within the present hour 
      }
      if (currentHourInt > inputHourInt) { // Applies grey color if hour is in the future 
          $("#" + i + "Row").addClass("past");
      }
      if (currentHourInt < inputHourInt) { // Applies green color if hour is in the future 
          $("#" + i + "Row").addClass("future");
      }
    }

    // Function that triggers data to be store in local storage when save button clicked 
    saveBtn.on("click", function () { // On-click 

      var rowHour = $(this).attr("data-hour"); // variable referencing the assigned hour row in the html doc 
      var input = $("#" + rowHour + "Row").val(); // saves the text that has been entered into the input column 
      localStorage.setItem(rowHour, input); //saves input to local storaage
    });
  
    //  Function to retrieve the stored input that was saved in each input 
    function renderPlans() {
      for (var i = 0; i <= 12; i++) {
      $("#" + i + "Row").val(localStorage.getItem(i));
      }
    }
});
  



  
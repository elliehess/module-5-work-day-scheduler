// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  
//display today's date and time 
  var currentDayEl = $('#currentDay');

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
  };


$(document).ready(function () {
    // Add a listener for click events on the save button. 
    $(".saveBtn").on("click", function () {
      //use jquery to get values 
      var textinputEl = $(this).siblings(".description").val();
      var timeinputEl = $(this).parent().attr("id").split("-")[1];

      //save these values to local storage 
      localStorage.setItem(timeinputEl, textinputEl);
    });

    function timeTracker (){
              //get the current time and number of hours
              var timeNow = moment().hour();

              // create a loop for the time blocks 
              $(".time-block").each(function () {
                  var blockTime = parseInt($(this).attr("id").split("-")[1]);
      
                  // create an if statement to check the time and add appropriate background classes
                  if (blockTime < timeNow) {
                      $(this).removeClass("future");
                      $(this).removeClass("present");
                      $(this).addClass("past");
                  }
                  else if (blockTime === timeNow) {
                      $(this).removeClass("past");
                      $(this).removeClass("future");
                      $(this).addClass("present");
                  }
                  else {
                      $(this).removeClass("present");
                      $(this).removeClass("past");
                      $(this).addClass("future");
      
                  }
              })
          }

    //Get the items from local storage if any stored
    $("#hour-9 .description").val(localStorage.getItem("9"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .description").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));
    

    timeTracker();
  
  });

  displayTime(); //run function for today's date
  setInterval(displayTime, 1000); //automatically update 

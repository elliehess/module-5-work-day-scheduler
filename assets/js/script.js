
$(document).ready(function () {

  //display today's date and time 
  var currentDayEl = $('#currentDay');

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
  };

  displayTime(); //run function for today's date
  setInterval(displayTime, 1000); //automatically update 

  
    // Add a listener for click events on the save button. 
    $(".saveBtn").on("click", function () {
      //use jquery to get values 
      var textinputEl = $(this).siblings(".description").val();
      var timeinputEl = $(this).parent().attr("id");

      //save these values to local storage 
      localStorage.setItem(timeinputEl, textinputEl);
    });

    function timeTracker (){
              //get the current time and number of hours
              var timeNow = dayjs().hour();

              // create a loop for the time blocks 
              $(".time-block").each(function () {
                  var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      
                  // create an if statement to check the time and add appropriate background classes
                  if (blockTime < timeNow) { // for past
                      $(this).removeClass("future");
                      $(this).removeClass("present");
                      $(this).addClass("past");
                  }
                  else if (blockTime === timeNow) { // for present
                      $(this).removeClass("past");
                      $(this).removeClass("future");
                      $(this).addClass("present");
                  }
                  else { // for future
                      $(this).removeClass("present");
                      $(this).removeClass("past");
                      $(this).addClass("future");
      
                  }
              })
          }

    //Get the items from local storage if any stored
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour23 .description").val(localStorage.getItem("hour23"));

    timeTracker(); //run function
  
});


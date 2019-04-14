var count = "this is a test"
var number = 60
var intervalId
var valt
var valt1
var valt2
var valt3



function countdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#demo").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      clearInterval(intervalId);

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

// function Validate() {
//   var radios = $("[name='Radios']")

//   for (var i = 0; i < radios.length; i++) {
//       if (radios[i].checked) {
//       alert("Selected Value = " + radios[i].value);
//       return true; // checked
//   }
//   };
// console.log(radios)
  // not checked, show error
  //document.getElementById('ValidationError').innerHTML = 'Error!!!';
  //return false;
//}
  countdown();

 $("#validateBtn").click(() => {
  const val = $('input[name="Radios"]:checked').val();
  console.log(val);
  
  const val1 = $('input[name="Radios1"]:checked').val();
  console.log(val1);

  const val2 = $('input[name="Radios2"]:checked').val();
  console.log(val2);
  
  const val3 = $('input[name="Radios3"]:checked').val();
  console.log(val3);
    if (val3 == "option4") {
      console.log("correct")
    }
});


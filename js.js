//add
function add(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var a = parseFloat(num1) + parseFloat(num2),
      addString = num1 + '+' + num2 + '=' + a;

  return addString;
}
function subtract (num1, num2){
var s = parseFloat(num1) - parseFloat(num2),
      subString = num1 + '-' + num2 + '=' + s;

  return subString;
}

function multiply (num1, num2){
var m = parseFloat(num1) * parseFloat(num2),
      multString = num1 + '*' + num2 + '=' + m;

  return multString;
}

function divide (num1, num2){
var d = parseFloat(num1) / parseFloat(num2),
      divString = num1 + '/' + num2 + '=' + d;

  return divString;
}

function populatehtml(operation){
  var input1 = document.getElementById('first').value;
  var input2 = document.getElementById('second').value;
  var output = operation(input1, input2);
  document.getElementById('result').innerText += output;
}   

  // hint: define three variables: input1, input2, and output
  // use output.innerText to set the text within it

  // if input1 or input2 is an empty string, output.innerText will be
  // set to a message that tells user they need to put in the numbers

  // remember the parameter operation is a function,
  // it needs its own arguments
}

// grab a button element
// to each button, attach a click event to which the appropriate operation is assigned
document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};

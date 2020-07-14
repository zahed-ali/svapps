console.log("connected")

function calculator() {
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);
  var operation = parseInt(document.getElementById("dropdown").value);
  if (operation == 1) {
    var z = x + y;
  }
  if (operation == 2) {
    var z = x - y;
  }
  if (operation == 1) {
    var z = x * y;
  }
  if (operation == 1) {
    var z = x / y;
  }
  document.getElementById("result").value = z;
}


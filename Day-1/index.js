var ip1 = document.getElementById("inputBox1");
var ip2 = document.getElementById("inputBox2");
var ip3 = document.getElementById("inputBox3");

document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
  var x = +ip1.value;
  var y = +ip2.value;
  var z = +ip3.value;
  var result = 3 * x + 2 * y - 3 * z;

  document.getElementById("showResult").innerText = result;
}

// Solve this equation 3x + 2y -3z
// mdn web docs, JavaScript.info
//

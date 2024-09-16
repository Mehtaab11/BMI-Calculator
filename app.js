function getResult() {
  var height = document.getElementById("height").value / 100;
  var weight = document.getElementById("weight").value;
  var result = document.getElementById("result");
  var info = document.getElementById("info");


  var bmi = (weight / (height * height)).toFixed(2);

  result.className = "result-box";

  if (bmi < 18.5) {
    result.classList.add("underweight");
    info.innerHTML = "You are underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    result.classList.add("normal");
    info.innerHTML = "You are normal";
  } else if (bmi > 24.9 && bmi < 29) {
    result.classList.add("overweight");
    info.innerHTML = "You are Overweight";
  } else {
    result.classList.add("obese");
    info.innerHTML = "You are obese";
  }

  result.innerHTML = "Your BMI is " + bmi;
}

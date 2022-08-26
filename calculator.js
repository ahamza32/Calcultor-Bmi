const express = require("express");

//const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send("the result of the calculation is: " + result);
});

app.listen(port, function () {
  console.log("port 3000 on");
});

// bmi calculator

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmilCalculator.html");
});

app.post("/bmi", function (req, res) {
  let weight = parseFloat(req.body.txt1);
  let height = parseFloat(req.body.txt2);
  let result = weight / (height * height);

  if (result < 18.5) {
    res.send("BMI: " + result + " Your BMI falls within the underweight range");
  } else if (result > 18.5 && result < 24.9) {
    res.send(
      "BMI: " +
        result +
        " Your BMI falls within the normal or healthy weight range"
    );
  } else if (result > 25 && result < 29.9) {
    res.send("BMI: " + result + " Your BMI falls within the overweight range");
  } else {
    res.send("BMI: " + result + " Your BMI falls within the obese range");
  }
});

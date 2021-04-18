const fs = require("fs");
var readline = require("readline");

var readLines = 0;

var testCases;

// read all tests from file
var rl = readline.createInterface({
  input: fs.createReadStream("pancake-tests.txt"),
});

// read all tests from file
rl.on("line", function (line) {
  if (readLines == 0) {
    testCases = parseInt(line);
  } else {
    var parts = line.split(" ");
    var pancakes = parts[0];
    var flipperSize = parseInt(parts[1]);
    var boolPancakes = new Array(pancakes.length);
    for (var i = 0; i < pancakes.length; i++) {
      boolPancakes[i] = pancakes[i] == "+";
    }
    solve(boolPancakes, flipperSize, readLines);
  }

  readLines++;
});

function solve(pancakes, flipperSize, caseIndex) {
  var flipps = 0;

  for (var i = 0; i < pancakes.length; i++) {
    if (!pancakes[i]) {
      if (i + flipperSize <= pancakes.length) {
        for (var j = i; j < i + flipperSize; j++) {
          pancakes[j] = !pancakes[j];
        }
        flipps++;
      } else {
        console.log("Case #" + caseIndex + ": IMPOSSIBLE");
        return;
      }
    }
  }
  console.log("Case #" + caseIndex + ": " + flipps);
}

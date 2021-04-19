const fs = require("fs");
var readline = require("readline");

var readLines = 0;

var rl = readline.createInterface({
  input: fs.createReadStream("pancake-tests.txt"),
});

// read all tests from file
rl.on("line", function (line) {
  // Line 1 = Number of tests
  if (readLines == 0) {
    testCases = parseInt(line);
  } else {
    // Line 2 ff
    // Left Part: s=row of pancakes
    // Right Part: k=number of pancakes to flip
    var parts = line.split(" ");
    var s = parts[0];
    var k = parseInt(parts[1]);
    // split s to array with
    // hs=happySide=[+]=true
    // bs=blankSide=[-]=false

    var pancakesArray = new Array(s.length);
    for (var i = 0; i < s.length; i++) {
      pancakesArray[i] = s[i] === "+";
    }
    if (validateData(pancakesArray, k, readLines))
      pkTest(pancakesArray, k, readLines);
  }
  readLines++;
});

function pkTest(pancakes, k, testCase) {
  if (validateTest(pancakes, k, testCase)) {
    var flipps = 0;
    // example input ---+-++-
    for (var position = 0; position < pancakes.length; position++) {
      // find first bs pancake in row
      if (!pancakes[position]) {
        // flip from position to position + k
        if (position + k <= pancakes.length) {
          for (var j = position; j < position + k; j++) {
            // flip
            pancakes[j] = !pancakes[j];
          }
          flipps++;
        } else {
          console.log("Case #" + testCase + ": IMPOSSIBLE");
          return;
        }
      }
    }
    // pk row after 1st action
    // ++++-++-
    // pk row after 2nd action
    // +++++---
    // pk row after 3nd action
    // ++++++++
    // exprected output = 3
    console.log("Case #" + testCase + ": " + flipps);
  }
}

function validateTest(pancakes, k, testCase) {
  if (k > pancakes.length) {
    console.log(
      "Case #" +
        testCase +
        ": TEST INVALID: k has to be lower or equal than pancake length"
    );
    return false;
  }
  if (k < 2) {
    console.log(
      "Case #" + testCase + ": TEST INVALID: k has to be higher or equal than 2"
    );
    return false;
  }
  return true;
}

function validateData(pancakes, k, testCase) {
  if (pancakes.length < 2) {
    console.log(
      "Case #" +
        testCase +
        ": TEST DATA INVALID: pancake length has to be higher than 2"
    );
    return false;
  }
  if (pancakes.length > 10) {
    console.log(
      "Case #" +
        testCase +
        ": TEST DATA INVALID: pancake length has to be lower or equal than 10"
    );
    return false;
  }
  if (k < 2) {
    console.log(
      "Case #" + testCase + ": TEST INVALID: k has to be higher or equal than 2"
    );
    return false;
  }
  return true;
}

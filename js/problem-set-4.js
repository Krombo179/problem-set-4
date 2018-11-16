/*
 * Hello. 2 points.
 */

function hello() {
    var p = document.getElementById("output1");
    p.innerHTML = "Hello, AP Computer Science Principles!";

  // WRITE YOUR EXERCISE 1 CODE HERE

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {
  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  name= prompt("What is your Name?");
  var p = document.getElementById("output2");
  p.innerHTML= "Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var fahr= ((cels * 9/5) + 32).toFixed(2);
  var p = document.getElementById("output3");
  p.innerHTML= cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var cels= ((fahr - 32) * 5/9).toFixed(2);
  var p = document.getElementById("output4");
  p.innerHTML= fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let miles = Math.floor(inches/63360);
  let extramiles = (inches%63360);
  let yards = Math.floor(extramiles/36);
  let extrayards = (extramiles%36);
  let feet = Math.floor(extrayards/12);
  let extrafeet = (extrayards%12);
  inches = (extrafeet);
  let p = document.getElementById("output5")
  p.innerHTML= `Miles: ${miles}<br/>Yards: ${yards}<br/>Feet: ${feet}<br/>Inches: ${inches}`;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilometers = Math.floor(centimeters/100000);
  let extrakilometers = (centimeters%100000);
  let meters = Math.floor(extrakilometers/100);
  let extrameters = (extrakilometers%100);
  centimeters = (extrameters);
  let p = document.getElementById("output6")
  p.innerHTML= `Kilometers: ${kilometers}<br/>Meters: ${meters}<br/>Centimeters: ${centimeters}`;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gallons = Math.floor(fluidOunces/128);
  let extragallons = (fluidOunces%128);
  let quarts = Math.floor(extragallons/32);
  let extraquarts = (extragallons%32);
  let pints = Math.floor(extraquarts/16);
  let extrapints = (extraquarts%16);
  let cups = Math.floor(extrapints/8.11);
  let extracups = (extrapints%8.11)
  fluidOunces = (extrapints);
  let p = document.getElementById("output7")
  p.innerHTML= `Gallons: ${gallons}<br/>Quarts: ${quarts}<br/>Pints: ${pints}<br/>Cups: ${cups}<br/>Fluid Ounces: ${fluidOunces}`;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = Math.floor(ounces/32000);
  let extratons = (ounces%32000);
  let pounds = Math.floor(extratons/16);
  let extrapounds = (extratons%16);
  ounces = (extrapounds);
  let p = document.getElementById("output8")
  p.innerHTML= `Tons: ${tons}<br/>Pounds: ${pounds}<br/>Ounces: ${ounces}`;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = Math.floor(pennies/100);
  let extradollars = (pennies%100);
  let quarters = Math.floor(extradollars/25);
  let extraquarters = (extradollars%25);
  let dimes = Math.floor(extraquarters/10);
  let extradimes = (extraquarters%10);
  let nickels = Math.floor(extradimes/5);
  let extranickels = (extradimes%5);
  pennies = (extradimes);
  let p = document.getElementById("output9")
  p.innerHTML= `Dollars: ${dollars}<br/>Quarters: ${quarters}<br/>Dimes: ${dimes}<br/>Nickels: ${nickels}<br/>Pennies: ${pennies}`;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00 and has all leading zeroes but no dollar sign."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  amount = amount * 100;
  let quarters = Math.floor(amount/25);
  let quartersextra = (amount-(25*quarters));
  let dimes = Math.floor(quartersextra/10);
  let dimesextra = (quartersextra-(10*dimes));
  let nickels = Math.floor(dimesextra/5);
  let nickelsextra = (dimesextra-(5*nickels));
  let pennies = (nickelsextra);
  amount = (quarters + dimes + nickels + pennies).toFixed(0);
  let coins = amount;
  if (coins>1) {
    coins="coins."
  } else {
    coins="coin."
  };
  let p = document.getElementById("output10");
  p.innerHTML= `${amount} ${coins}`;

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

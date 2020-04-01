"use strict";
const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");
console.log(decr);
console.log(incr);
console.log(myValue);
let counterValue = 0;
const countDecr = function() {
  counterValue -= 1;
  myValue.textContent = counterValue;
};
const countIncr = function() {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decr.addEventListener("click", countDecr);
incr.addEventListener("click", countIncr);
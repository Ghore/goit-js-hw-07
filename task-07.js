const range = document.querySelector("#font-size-control");
const p = document.querySelector("#text");


range.addEventListener("input", function rangeUp() {
  text.style.fontSize = range.value + "px";
});

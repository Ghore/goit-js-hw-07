"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const myUl = document.querySelector("#ingredients");

const frarment = document.createDocumentFragment();

for (const item of ingredients) {
  const insertLi = document.createElement("li");
  insertLi.innerText = item;
  frarment.prepend(insertLi);
}
myUl.append(frarment);

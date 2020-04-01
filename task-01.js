"use strict";

const list = document.querySelector("#categories");
console.dir(`В списке ${list.children.length} категории`);

const categories = document.querySelectorAll("#categories .item");
for (let i = 0; i < categories.length; i++) {
  const element = categories[i];
  const title = element.querySelector("h2");
  const quantity = element.querySelectorAll("li");
  console.log(
    `Категория: ${title.textContent} Количество элементов: ${quantity.length}`
  );
}

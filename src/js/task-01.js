
const numberOfCategoriesEl = document.querySelectorAll("li.item");
const message1 = 'Number of category:';
console.log(message1, numberOfCategoriesEl.length);

const titleCategoriesEl = document.querySelectorAll("h2");
const message2 = 'Category:';
const message3 = 'Elements:';
console.log(message2, titleCategoriesEl[0].textContent);
console.log(message3, titleCategoriesEl[0].nextElementSibling.children.length);
console.log(message2, titleCategoriesEl[1].textContent);
console.log(message3, titleCategoriesEl[1].nextElementSibling.children.length);
console.log(message2, titleCategoriesEl[2].textContent);
console.log(message3, titleCategoriesEl[2].nextElementSibling.children.length);







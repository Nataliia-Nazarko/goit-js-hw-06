
const numberOfCategoriesEl = document.querySelectorAll("li.item");
const messageCategories = 'Number of category:';
console.log(messageCategories, numberOfCategoriesEl.length);

const titleCategoryEl = document.querySelectorAll("h2");
const messageCategory = 'Category:';
const messageElements = 'Elements:';
console.log(messageCategory, titleCategoryEl[0].textContent);
console.log(messageElements, titleCategoryEl[0].nextElementSibling.children.length);
console.log(messageCategory, titleCategoryEl[1].textContent);
console.log(messageElements, titleCategoryEl[1].nextElementSibling.children.length);
console.log(messageCategory, titleCategoryEl[2].textContent);
console.log(messageElements, titleCategoryEl[2].nextElementSibling.children.length);







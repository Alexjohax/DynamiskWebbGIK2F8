"use strict";

const bookList = [
  {
    id: 1,
    author: "Charles Dickens",
    title: "Oliver Twist",
  },
  {
    id: 2,
    author: "William Shakespeare",
    title: "Hamlet",
  },
];
const handleKeyPress = (e) => {
  /* 1. Ta emot/läsa av värdet i inputfältet
            2. Skicka värdet till searchBooks */
  searchBooks(e.target.value);
};

const searchInput = document.getElementById("searchField");
searchInput.addEventListener("keyup", handleKeyPress);

const searchBooks = (searchTerm) => {
  const filteredList = [];
  for (let i = 0; i < bookList.length; i++) {
    const title = bookList[i].title.toLowerCase();
    if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
      filteredList.push(bookList[i]);
    }
  }
  renderList(filteredList);
};

const renderList = (list) => {
  let html = `<ul id="thelist" class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-autp">`;
  for (let i = 0; i < list.length; i++) {
    html += `
        <li class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-800 last:border-b-0 border-b border-indigo-500 cursor-pointer">
        ${list[i].author} - ${list[i].title}
        </li>
        `;
  }
  html += `</ul>`;

  const existingElement = document.getElementById("thelist");
  const root = document.getElementById("root");

  if (existingElement) {
    existingElement.remove();
    console.log(existingElement);
  }

  root.insertAdjacentHTML("beforeend", html);
};

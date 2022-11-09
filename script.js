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
  const existingElement = document.getElementById("thelist");
  const root = document.getElementById("root");

  if (existingElement) {
    existingElement.remove();
  }

  if (list.length > 0) {
    root.insertAdjacentHTML("beforeend", BookList(list));
  }
};

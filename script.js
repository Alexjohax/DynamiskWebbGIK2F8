"use strict";

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => {
    bookList = apiBooks;
  });
});

const searchInput = document.getElementById("searchField");
searchInput.addEventListener("keyup", (e) =>
  renderList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().indexOf(searchTerm) >= 0 ||
        author.toLowerCase().indexOf(searchTerm) >= 0
      );
    })
  )
);

const renderList = (list) => {
  const existingElement = document.getElementById("thelist");
  const root = document.getElementById("root");

  if (existingElement) {
    existingElement.remove();
  }

  list.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(list));
};

/* getAll().then((bookList) => renderList(bookList)); */

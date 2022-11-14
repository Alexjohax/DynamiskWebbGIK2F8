"use strict";

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => {
    window.bookList = apiBooks;
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

const getBookById = (id) => {
  //console.log(id);
  return bookList.filter((item) => item.id == id).shift();
};

const renderList = (list) => {
  const existingElement = document.getElementById("thelist");
  const root = document.getElementById("root");

  if (existingElement) {
    existingElement.remove();
  }

  list.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(list));
  let lista = document.querySelectorAll(".book-list__item");
  lista.forEach((item) => {
    item.addEventListener("click", (e) => {
      let id;
      if (e.target.nodeName === "P") {
        id = e.target.parentNode.id;
      } else {
        id = e.target.id;
      }
      console.log("event", e);
      const element = renderPopup(getBookById(id));
      item.insertAdjacentHTML("beforeend", element);
    });
  });
};

const renderPopup = (book) => {
  //console.log(book);
  const div = `<div class"">${book.title}</div>`;
  return div;
};
/* getAll().then((bookList) => renderList(bookList)); */

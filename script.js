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
    item.addEventListener("mouseover", (e) => {
      let id;
      if (e.target.nodeName === "P") {
        id = e.target.parentNode.id;
      } else {
        id = e.target.id;
      }
      console.log("event", e);
      const element = renderPopup(getBookById(id), e.pageX, e.pageY);

      root.insertAdjacentHTML("beforeend", element);
    });
    item.addEventListener("mouseout", (e) => {
      const element = document.getElementById("popup");
      element.remove();
    });
    item.addEventListener("mousemove", (e) => {
      const element = document.getElementById("popup");
      if (element) {
        element.style.top = e.pageY + "px";
        element.style.left = e.pageX + "px";
      }
    });
  });
};

const renderPopup = (book, x, y) => {
  console.log(x, y);
  const div = `<div id="popup" class="fixed rounded-md border-2 border-purple-600 z-10 bg-gradient-to-tr from-indigo-400 to-lime-300 px-5 py-5 flex top-[${y}px] left-[${x}px]">
  <div class="basis-2/3 flex flex-col space-y-2.5 text-sm">
  <p>Title: ${book.title}</p>
  <p>Author: ${book.author}</p>
  <p>Pages: ${book.pages}</p>
  <p>Release date: ${book.releaseDate}</p>
  </div>
  <div class="basis-1/3">
  <img src="${book.coverImage}" alt="${book.title}" width=120/>
  </div>
  
  </div>`;
  return div;
};

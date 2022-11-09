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

  if (list.length > 0) {
    root.insertAdjacentHTML("beforeend", BookList(list));
  }
};

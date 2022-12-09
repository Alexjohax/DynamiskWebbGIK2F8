"use strict";

window.addEventListener("load", () => {
  getAll().then((apiBooks) => {
    localStorage.setItem("bookList", JSON.stringify(apiBooks));
  });
});

const searchInput = document.getElementById("searchField");
searchInput.addEventListener("keyup", (e) =>
  renderList(
    JSON.parse(localStorage.getItem("bookList")).filter(({ title, author }) => {
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
  let lista = document.querySelectorAll(".book-list__item");

  lista.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      let id;
      if (e.target.nodeName === "P") {
        id = e.target.parentNode.id;
      } else {
        id = e.target.id;
      }
      const bookDetail = document.getElementById("bookDetail");
      if (bookDetail) {
        bookDetail.remove();
      } else {
        renderPopup(id, e.pageX, e.pageY);
      }
      console.log("event", e.target);
    });
    item.addEventListener("mouseout", () => {
      const bookDetail = document.getElementById("bookDetail");
      bookDetail.remove();
    });
    item.addEventListener("mousemove", (e) => {
      const bookDetail = document.getElementById("bookDetail");
      if (bookDetail) {
        bookDetail.style.top = e.pageY + "px";
        bookDetail.style.left = e.pageX + "px";
      }
    });
  });
};

const renderPopup = async (id, x, y) => {
  await getBook(id).then((apiBook) => {
    let { id, author, title, coverImage, pages, releaseDate } = apiBook;
    console.log(id, author, title, coverImage, pages, releaseDate);
    const div = `<div id="bookDetail" class="fixed rounded-md w-1/4 gap-2 border-2 border-purple-600 z-10 bg-gradient-to-tr from-indigo-400 to-lime-300 px-5 py-5 flex top-[${y}px] left-[${x}px]">
      <div class="basis-2/3 flex flex-col space-y-2.5 text-sm">
      <p>Title: ${title}</p>
      <p>Author: ${author}</p>
      <p>Pages: ${pages}</p>
      <p>Release date: ${releaseDate}</p>
      </div>
      <div class="basis-1/3">
      <img class="max-w-fit" src="${
        coverImage
          ? coverImage
          : "https://www.shutterstock.com/image-vector/red-book-isolated-on-white-260nw-118879087.jpg"
      }" alt="${title}" width=120/>
      </div>
      
      </div>`;
    root.insertAdjacentHTML("beforeend", div);
  });
};

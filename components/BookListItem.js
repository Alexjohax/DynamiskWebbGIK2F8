const BookListItem = (book) => {
  let html = `
    <li class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-800 
    last:border-b-0 border-b border-indigo-500 cursor-pointer flex justify-between items-center">
    <p>${book.author} - ${book.title}</p><img class="justify-self-end" src=${book.coverImage} alt=${book.title} width="60" height="120" />
    </li>
    `;

  return html;
};

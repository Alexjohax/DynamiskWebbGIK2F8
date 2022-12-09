const BookList = (list) => {
  let html = `<ul id="thelist" class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-autp">`;
  for (let i = 0; i < list.length; i++) {
    html += BookListItem(list[i]);
  }
  html += `</ul>`;

  return html;
};

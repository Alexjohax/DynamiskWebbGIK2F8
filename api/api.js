const url = "https://gik2f8-labs.herokuapp.com/books";

async function getAll() {
  const response = await fetch(url)
    .then((response) => response.json())
    .catch((e) => console.log(e));
  return response;
}

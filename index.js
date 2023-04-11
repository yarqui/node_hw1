console.log("1st try");
console.log("2nd try");

let books = [
  { id: 1, title: "farm" },
  { id: 2, title: "farm2" },
  { id: 3, title: "farm3" },
  { id: 4, title: "farm4" },
  { id: 5, title: "farm5" },
];

const deleteById = (id) => {
  const index = books.findIndex((item) => item.id === id);
  console.log("index:", index);

  if (index === -1) {
    return null;
  }
  const [result] = books.splice(index, 1);
  console.log("books:", books);
  console.log("result:", result);
};

deleteById(4);

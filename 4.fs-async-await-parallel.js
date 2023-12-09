const fs = require("node:fs/promises");

//IIFE - Inmeadiatly Invoked Function Expression
// (
//  () => {}
// )()

Promise.all([
  fs.readFile("./archivo.txt", "utf8"),
  fs.readFile("./archivo2.txt", "utf8"),
]).then(([text, secondText]) => {
  console.log("primer texto:", text);
  console.log("segundo texto:", secondText);
});

import express from "express";
let app = express();
let array = [
  {
    id: 1,
    name: "sahar",
  },
  {
    id: 2,
    name: "fayez",
  },
  {
    id: 3,
    name: "himida",
  },
];
// to stop terminal =>> (ctrl+c)
const f = (request, response) => {
  let output = "";
  for (let index = 0; index < array.length; index++) {
    output += array[index].id + "   " + array[index].name + "<br>";
  }
  response.send(output);
};
app.get("/students", f);

app.listen(9000);

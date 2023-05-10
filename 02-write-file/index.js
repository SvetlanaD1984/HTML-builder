const fs = require("fs");
const path = require("path");
const process = require("node:process");
const { stdin, stdout } = process;
//const readline = require("node:readline/promises");
//const readline = require("node:readline");

const fileName = "02-write-file";
const fileNameJoin = path.join("./", fileName, "text.txt");

//Создаю поток на запись в текстовый файл
const writeStream = fs.createWriteStream(fileNameJoin, "utf-8");
const input = fs.createReadStream(fileNameJoin, "utf-8");
input.on("data", (chunk) => writeStream.write(chunk));
input.on("error", (error) => console.log("Error", error.message));

//Вывожу в консоль приветственное сообщения
stdout.write("Здравствуйте. Введите любой текст:\n");

stdin.on("data", (data) => {
  stdout.write(data);

  process.exit();
});

//Сохраняю текст в файл text.txt
fs.writeFile(fileNameJoin, "data", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Файл создан");
  }
});

//Выход из программы при нажатии  CTRL+C или вводе слова exit
process.on("SIGINT", () => {
  stdout.write("До свидания!");
});
process.on("exit", () => stdout.write("До свидания!"));

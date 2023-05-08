const fs = require("fs");
const path = require("path");
const process = require("node:process");
const { stdin, stdout } = process;

//Создаю поток на запись в текстовый файл
const writeStream = fs.createWriteStream("text.txt");
const input = fs.createReadStream("text.txt", "utf-8");
input.on("data", (chunk) => writeStream.write(chunk));
input.on("error", (error) => console.log("Error", error.message));

//Вывожу в консоль приветственное сообщения
stdout.write("Здравствуйте. Введите любой текст:\n");
stdin.on("data", (data) => {
  stdout.write(data);
  process.exit();
});
process.on("SIGINT", () => {
  console.log("До свидания!");
});
process.on("exit", () => stdout.write("До свидания!"));

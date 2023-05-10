const fs = require("fs");
const path = require("path");

const folderName = "03-files-in-folder/secret-folder";
const folderNameJoin = path.join("./", folderName);

fs.readdir(folderNameJoin, (err, files) => {
  if (err) throw err;
  console.log("В папке secret-folder находятся следующие файлы:");

  files.forEach((file) => {
    console.log(`имя файла ${file}`);
    console.log(`расширение ${path.extname(file)}`);
  });
});

fs.stat(folderNameJoin, function (err, stats, file) {
  if (stats.isFile(stats)) {
    console.log("это файл" + file.size);
  }
  if (stats.isDirectory(stats)) {
    console.log("это папка");
  }
});

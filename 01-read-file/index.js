const fs = require("fs");
const path = require("path");

const fileName = "01-read-file";
const fileNameJoin = path.join("./", fileName, "text.txt");

const readStream = fs.createReadStream(fileNameJoin, "utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

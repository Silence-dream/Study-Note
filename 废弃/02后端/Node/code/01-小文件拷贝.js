const { constants } = require("buffer");
const fs = require("fs");
const { argv } = require("process");

function copy(src, des) {
  fs.writeFileSync(des, fs.readFileSync(src));
}
copy("./1.txt", "./2.txt");

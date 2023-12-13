const fs = require("node:fs");
const { promisify } = require("node:util");

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

readdir(".")
  .then((files) => {
    console.log("files: ", files);
    return readFile(files[0], { encoding: "utf-8" });
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((err) => {
    console.log("err: ", err);
  });

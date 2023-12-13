const fs = require("node:fs");

const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
};

const readFile = (filename, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, options, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });
};

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

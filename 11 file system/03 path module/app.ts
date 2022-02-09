import { readFile } from "fs";
import { join } from "path";

// only works, if 'node app.js' is called in the directory of hello.txt
const fileName: string = "hello.txt";
readFile(fileName, "utf8", function (error, data) {
    if (error !== null) {
        console.log(error);
        return;
    }
    console.log(`content of ${fileName}: ${data}`);
});

// always works, as long as hello.txt is in the same directory as app.js
const filePath: string = join(__dirname, "hello.txt");
readFile(filePath, "utf8", function (error, data) {
    if (error !== null) {
        console.log(error);
        return;
    }
    console.log(`content of ${filePath}: ${data}`);
});
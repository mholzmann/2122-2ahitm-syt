import { readFile } from "fs";

const fileName: string = "hello.txt";

readFile(fileName, "utf8", function (error, data) {
    if (error !== null) {
        console.log(error);
        return;
    }
    console.log(`content of ${fileName}: ${data}`);
});
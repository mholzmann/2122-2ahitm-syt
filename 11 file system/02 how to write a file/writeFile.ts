import { writeFile } from "fs";

const fileName: string = "hello.txt";
const data: string = "hello node";

writeFile(fileName, data, "utf8", function(error) {
    if (error !== null) {
        console.log(error);
        return;
    }
    console.log(`${fileName} has been written successfully.`);
});
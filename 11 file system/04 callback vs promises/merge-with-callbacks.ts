// The following code with nested callbacks is called "callback hell". :-(

import { readFile, writeFile } from "fs";

console.log("Reading part1.txt ...");
readFile("txts/part1.txt", "utf8", function (error, data) {
    if (error !== null) {
        console.log(error);
        return;
    }
    console.log("Read file successfully.");
    let content = data;

    console.log("Reading part2.txt ...");
    readFile("txts/part2.txt", "utf8", function (error, data) {
        if (error !== null) {
            console.log(error);
            return;
        }
        console.log("Read file successfully.");
        content += data;

        console.log("Writing file ...");
        writeFile("txts/merged-with-callbacks.txt", content, "utf8", function (error) {
            if (error !== null) {
                console.log(error);
                return;
            }
            console.log('Merged files successfully.');            
        });
    });
});

console.log("<<< Could do something else meanwhile >>>");
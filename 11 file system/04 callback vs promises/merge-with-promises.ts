// With promises you can avoid the "callback hell" (see callback.ts).
// The keywords "async" and "await" make the usage of promises more comfortable.

import { readFile, writeFile } from "fs/promises";

mergeFiles();
console.log("<<< Could do something else meanwhile >>>");


async function mergeFiles() {   
    try {
        console.log("Reading part1.txt ...");
        let text = await readFile("txts/part1.txt", "utf8");
        console.log("Read file successfully.");
        
        console.log("Reading part2.txt ...");
        text += await readFile("txts/part2.txt", "utf8");
        console.log("Read file successfully.");        

        console.log("Writing file ...");
        await writeFile("txts/merged-with-promises.txt", text);
        console.log("Merged files successfully.");
    } catch (error) {
        console.log(error);
    }
}
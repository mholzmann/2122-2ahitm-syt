import { readFile } from "fs/promises";

interface Person {
    firstName: string;
    lastName: string;
    cities: string[];
}

readPerson();

async function readPerson() {
    try {
        const jsonString: string = await readFile("person.json", "utf8");
        const person: any = JSON.parse(jsonString);
        console.log(person);
    } catch (error) {
        console.log(error);
    }
}


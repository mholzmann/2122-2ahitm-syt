import { readFile } from "fs/promises";

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    hasDrivingLicense: boolean;
}

readPerson();

async function readPerson() {
    try {
        const jsonString: string = await readFile("person.json", "utf8");
        const person: Person = JSON.parse(jsonString);
        console.log(person);
    } catch (error) {
        console.log(error);
    }
}


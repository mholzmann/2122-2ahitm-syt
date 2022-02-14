import { writeFile } from "fs/promises";

const person = {
	firstName: "Jane",
	lastName: "Doe",
	age: 37,
	hasDrivingLicense: true
};

savePerson();

async function savePerson() {
    try {
        // \t is the escape sequence for a horicontal tabulator
        const jsonString: string = JSON.stringify(person, null, "\t");
        await writeFile("person.json", jsonString);
        console.log("File written successfully");
    } catch (error) {
        console.log(error);
    }
}
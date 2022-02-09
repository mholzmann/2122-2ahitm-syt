import { writeFile } from "fs/promises";

interface Person {
    firstName: string;
    lastName: string;
    cities: string[];
}

const members: Person[] = [
    {
        firstName: "Jane",
        lastName: "Doe",
        cities: ["Linz", "London", "New York"]
    },
    {
        firstName: "John",
        lastName: "Smith",
        cities: ["London"]
    },
    {
        firstName: "Richie",
        lastName: "Rich",
        cities: []
    }
];

saveMembers();

async function saveMembers() {
    try {
        // \t is the escape sequence for a horicontal tabulator
        const jsonString: string = JSON.stringify(members, null, "\t");
        await writeFile("members.json", jsonString);
        console.log("File written successfully");
    } catch (error) {
        console.log(error);
    }
}
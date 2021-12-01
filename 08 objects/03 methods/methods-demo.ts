// you can add methods to the interface declaration
interface Human {
    firstName: string;
    lastName: string;
    age: number;
    female?: boolean;
    getName: () => string;
}

// you have to use 'this' keyword, when you want to access a property within a method
const jill: Human = {
    firstName: 'Jill',
    lastName: 'Smith',
    age: 44,
    getName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(jill.getName());

// each object has its own method implementation
const jack: Human = {
    firstName: 'Jack',
    lastName: 'Doe',
    age: 55,
    getName: function() {
        return `${this.lastName} ${this.firstName}`;
    }
};

console.log(jack.getName());

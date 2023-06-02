/**
 * inheritance class
 * giup khong phai code lai nhung class co san
 * chi viec sd ma thoi :D
 */
class DogFamily {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        let t = this.getFullName();
        return `This is: ${t}`;
    }
}

class Coggi extends DogFamily {
    private age: number;
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName);
        this.age = age;
    }
    // overwrite function
    describe(): string {
        return (`${super.describe()}, I really love dogs`);
    }
}

let cog1 = new Coggi('Poo', 'Phoong', 3);
console.log(`check function: `, cog1.describe())
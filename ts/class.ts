/**
 * class trong TS co tu es6
 */
class Person {
    ssn: number;
    firstName: string;
    lastName: string;

    constructor(ssn: number, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} - ${this.lastName}`;
    }
}
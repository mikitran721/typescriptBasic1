/**
 * method truy cap thuoc tinh class
 * 
 */
class Dogs {
    private _age: number;
    public firtstName: string;
    public lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this._age = age;
        this.firtstName = firstName;
        this.lastName = lastName;
    }
    // getters
    get age() {
        return this._age;
    }
    getAge() {
        return this._age;
    }

    // setters
    set age(ag: number) {
        if (ag < 0 || ag > 150) {
            throw Error("Sai tuoi roi")
        }
        this._age = ag;
    }

    setAge(age1: number) {
        if (age1 < 0 || age1 > 150) {
            throw Error("Invalid age")
        }
        this._age = age1;
    }
}

let dog1 = new Dogs(8, "Poo", "Phoong");
dog1.age = 3;
// console.log(`>>>check age: `, dog1.getAge())
console.log(`>>age: `, dog1.age)
dog1.age = 300;
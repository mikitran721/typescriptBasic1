/* INTERFACE */

interface IPerson{
    name:string;
    age: number;
    speak(lang:string):void;
    spend(amount:number):number;
}

const miki:IPerson = {
    name: "Miki",
    age:100,
    speak(text:string):void{
        console.log(text);
    },
    spend(amt:number):number{
        return amt;
    }
}

// console.log(miki)
const helloPerson = (onePerson:IPerson) => console.log(`Hello ${onePerson.name}`)
helloPerson(miki)
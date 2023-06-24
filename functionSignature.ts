/* FUNCTION SIGNATURE */
// let greet:Function

// greet=() => console.log("greetings")
// let greet:(a:string,b:string) => void;
// greet = (name:string, greeting:string) => console.log(`${name} says ${greeting}`);
// greet('miki','Hey guys')

// let calculate: (a: number, b: number, c: string) => number;
// calculate = (numOne: number, numTwo: number, action: string) =>
//   action === "add" ? numOne + numTwo : numOne - numTwo;

// console.log(calculate(4, 5, "add"));

type Student = {name:string, age:number}
let printStudent:(student:Student) => void;
// use destructure
printStudent = ({name,age}:Student) =>{
    console.log(`${name} is ${age} years old`)
}
printStudent({name:'Poo',age:2})
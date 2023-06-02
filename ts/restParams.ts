/**
 * toan tu REST (...name)
 * chi 1 va nam o cuoi - chi voi array type
 */

// function getNum(...nums: number[]): number {
//     let total = 0;
//     nums.forEach((num) => total += num);
//     return total;
// }

// console.log(`>>>check sum: `, getNum(3, 5, -2, 9, 10))

function multiple(n: number, ...m: number[]) {
    // let a = m.map((x,y)=>{
    // return x*n;
    // })
    //    let b = m.doWhile()
    return m.map((x) => n * x)
}
// map() tra ra 1 new array

let z3 = multiple(10, 4, 6, 4, 7, 20)

console.log(`>>>check rest type: `, z3)

// work with string
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!"
}

console.log(Greet("Hello ", "Miki", "Poo", "Phoong"))
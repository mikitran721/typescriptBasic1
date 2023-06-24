/* OPTIONAL & NON NULL */

// const add = (a:number, b?:number) => b ? a+ b : a;

// console.log(add(3));

const addNonNull = (a:number, b?:number) => a + b!;
//dau ! la nonnull -> nhat dinh co bien b, neu ko co b se la NAN;
console.log(addNonNull(3,4))
console.log(addNonNull(2))
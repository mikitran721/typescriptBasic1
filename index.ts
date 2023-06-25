// GENERICS
/* 
    khai bao truoc dang cua bien
*/
type strArr = Array<string>;
type numArr = Array<number>;

const last = (arr:Array<number>) => arr[arr.length - 1];

const l1 = last([1,5,90])
// console.log(l1);
// const l2 = last(['aa','cc']);

const lastT = <T>(arr:Array<T>) => arr[arr.length - 1];
// chup anh nhung thu we past vao

const l3 = lastT([1,3,6]);
const l4 = lastT(['a','b','c']);
const l5 = lastT<string>(['a','b','c']);

const makeArr = (x:number) =>[x];

const m = makeArr(5);
// console.log(m);

// khong biet var dua vao type j -> chuyen thanh generics; kq phu thuoc vao cai ta dua vao
const makeArrT = <T>(x:T) =>[x];
const m3 = makeArrT(4)

const makeArrXY = <X,Y>(x:X,y:Y) => [x,y];
const m4 = makeArrXY(5,6)
const m5 = makeArrXY('a', 'b')
const m6 = makeArrXY('c',5)

// console.log(m6)
const makeTuple = <X,Y>(x:X,y:Y): [X,Y] =>[x,y]
const m7 = makeTuple('x',5)
const m8 = makeTuple('y','c')
const m9 = makeTuple<string,number>('abc',23)
const m10 = makeTuple<string | null,number>(null,0)

//chi truyen vao 1 => dung default
const makeTupleWithDefault = <X,Y = number>(x:X,y:Y):[X,Y] =>[x,y]
const m11 = makeTupleWithDefault<string| null>('abc',1);

// GENERICS EXTENDS
/* const makeFullName = obj => ({
    ...obj,
    fullName:`${obj.firstName} ${obj.lastName}`
}) */

const makeFullNameConstraint = (obj: {firstName:string, lastName:string}) =>({
    ...obj,
    fullName:`${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({firstName:'miki', lastName:'tran'});
// const n2 = makeFullNameConstraint({firstName:'phoong',lastName:'poo',age:10}); --> errror

// nhu khai bao tren se khong them prop duoc -> su dung GENERICS
const makeFullNameConstraintWithGenerics = <T extends {firstName:string, lastName:string}>(obj:T) => ({
    ...obj,
    fullName:`${obj.firstName} ${obj.lastName}`
})
const n3 = makeFullNameConstraintWithGenerics({firstName:'miki',lastName:'Poo',age:100,gender:'female'})

const addNewEmployee = (employee:object) => {
    const uid = Math.floor(Math.random() *100);
    return{
        ...employee,
        uid,
    }
}
// khi goi ham chi biet co uid;
const empOne = addNewEmployee({name:'miki', age:100})
// console.log(empOne)

const addNewEmployeeT = <T extends object>(employee:T) => {
    const uid = Math.floor(Math.random() *100);
    return{
        ...employee,
        uid,
    }
}

const empTwo = addNewEmployeeT({name:'miki', age:100,male:false})
// console.log(empTwo, empTwo.name);

const addNewEmployeeTWithConstraint = <T extends {name:string}>(employee:T) => {
    const uid = Math.floor(Math.random() *100);
    return{
        ...employee,
        uid,
    }
}

const empThree = addNewEmployeeTWithConstraint({name:'miki', age:100,male:false})

// GENERIC INTERFACE
interface IResource<T>{
    uid:number,
    name:string,
    data: T,
}

type NumberResource = IResource<Number[]>;
const numbers:NumberResource={
    uid:2,
    name:'Number',
    data:[1,3,3]
}

const resOne:IResource<string>={
    uid:1,
    name:'Person',
    data:'Hey you'
}

const resTwo:IResource<object> ={
    uid:2,
    name:'Mai',
    data:{name:'English'}
}

const resThree:IResource<string[]>={
    uid:3,
    name:'dev',
    data:['js','css3']
}
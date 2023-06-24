/* CLASS */
//khai bao va khoi tao

export class Employee {
    /* public name:string;
    private age:number;
    readonly male:boolean;

    constructor(n:string, a:number,m:boolean){
        this.name = n;
        this.age = a;
        this.male = m;
    } */
    constructor(
        public name:string,
        private age:number,
        readonly male:boolean,
    ){}

    print(){
        return `Name: ${this.name}, Age: ${this.age}, Gender male: ${this.male}`;
    }
}

const miki = new Employee('miki',100,false)
// console.log(miki.name);
// // console.log(miki.age)
// console.log(miki.male)
// console.log(miki.print())

const poo = new Employee('poo',10,false)

let employees:Employee[] = []; //du lieu kieu mang Employee
employees.push(miki);
employees.push(poo)

//truy xuat
employees.forEach(em => console.log(em.name, em.male, em.print()));

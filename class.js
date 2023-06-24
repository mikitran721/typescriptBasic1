"use strict";
/* CLASS */
//khai bao va khoi tao
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    /* public name:string;
    private age:number;
    readonly male:boolean;

    constructor(n:string, a:number,m:boolean){
        this.name = n;
        this.age = a;
        this.male = m;
    } */
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var miki = new Employee('miki', 100, false);
// console.log(miki.name);
// // console.log(miki.age)
// console.log(miki.male)
// console.log(miki.print())
var poo = new Employee('poo', 10, false);
var employees = []; //du lieu kieu mang Employee
employees.push(miki);
employees.push(poo);
//truy xuat
employees.forEach(function (em) { return console.log(em.name, em.male, em.print()); });

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 5, 90]);
// console.log(l1);
// const l2 = last(['aa','cc']);
var lastT = function (arr) { return arr[arr.length - 1]; };
// chup anh nhung thu we past vao
var l3 = lastT([1, 3, 6]);
var l4 = lastT(['a', 'b', 'c']);
var l5 = lastT(['a', 'b', 'c']);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// console.log(m);
// khong biet var dua vao type j -> chuyen thanh generics; kq phu thuoc vao cai ta dua vao
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT(4);
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY('a', 'b');
var m6 = makeArrXY('c', 5);
// console.log(m6)
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple('x', 5);
var m8 = makeTuple('y', 'c');
var m9 = makeTuple('abc', 23);
var m10 = makeTuple(null, 0);
//chi truyen vao 1 => dung default
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefault('abc', 1);
// GENERICS EXTENDS
/* const makeFullName = obj => ({
    ...obj,
    fullName:`${obj.firstName} ${obj.lastName}`
}) */
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: 'miki', lastName: 'tran' });
// const n2 = makeFullNameConstraint({firstName:'phoong',lastName:'poo',age:10}); --> errror
// nhu khai bao tren se khong them prop duoc -> su dung GENERICS
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n3 = makeFullNameConstraintWithGenerics({ firstName: 'miki', lastName: 'Poo', age: 100, gender: 'female' });
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
// khi goi ham chi biet co uid;
var empOne = addNewEmployee({ name: 'miki', age: 100 });
// console.log(empOne)
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: 'miki', age: 100, male: false });
// console.log(empTwo, empTwo.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({ name: 'miki', age: 100, male: false });
var numbers = {
    uid: 2,
    name: 'Number',
    data: [1, 3, 3]
};
var resOne = {
    uid: 1,
    name: 'Person',
    data: 'Hey you'
};
var resTwo = {
    uid: 2,
    name: 'Mai',
    data: { name: 'English' }
};
var resThree = {
    uid: 3,
    name: 'dev',
    data: ['js', 'css3']
};

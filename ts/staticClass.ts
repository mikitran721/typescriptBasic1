/**
 * toan tu static;
 * co the gan gia tri truc tiep cho static ma khong can ham constructor
 * khong can goi new class() ma van goi dc thuoc tinh cua no
 */

class Circle {
    static pi: number = 3.14;
    public zz: number = 2023;

    static calculateArea(radius: number) {
        return this.pi * radius ** 2
    }
}

// goi static khong can new Circle
let dg = new Circle;
console.log(`>>get zz - public: `, dg.zz)
/**
 * can not use:
 * console.log(`>>get zz - public: `, dg.calculateArea(200))
 * chi co the goi bien va function static qua ten goc cua Class - ko phai phan tu tai sinh
 */

console.log(`>> Static value: `, Circle.pi)
console.log(`>>call static function: `, Circle.calculateArea(200))
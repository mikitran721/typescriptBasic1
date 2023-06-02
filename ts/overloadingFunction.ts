/**
 * overloading function
 * hai funct giong nhau, chi khac kieu data
 * co the sd kieu UNION + du lieu tra ve do TS tu define
 * can dinh nghia voi function co dien function(){..}
 * define cac funct same name->goi la overload funct
 * can co ham tong return lai gia tri;
 */
function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

// dinh nghia ham overload
function addNew(a: number, b: number): number;

function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
    return a + b;
};

//overload in class comp
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    }
}

let counter111 = new Counter();
console.log(`>> ko co tham so: `, counter111.count());
console.log(`>>>. co tham so`, counter111.count(10));
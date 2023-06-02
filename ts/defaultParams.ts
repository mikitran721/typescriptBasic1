/**
 * default params
 */

const tong2 = (x: number, y: number, z: any = false) => {
    if (z === false) {
        return x + y
    }
    if (z) {
        return x - y + z;
    }
}

let x1 = tong2(1, 5);
let y3 = tong2(1, 5, 6)
console.log(x1, y3)
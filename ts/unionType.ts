/**
 * dinh nghia cac kieu du lieu ma tham so dau vao cua function co the nhan duoc
 * tranh duoc phai run code moi thay dc loi
 * bao loi ngay khi code 
 */
const addNumberOrString = (a: (any | string | boolean), b: (string | boolean | number | object)) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error(`Parameters must be numbers or strings`)
}
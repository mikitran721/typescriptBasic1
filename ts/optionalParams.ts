/**
 * Tham so tuy chon, co the truyen vao or  ko
 * dung toan tu ?:<kieu>
 */

const sum5 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}
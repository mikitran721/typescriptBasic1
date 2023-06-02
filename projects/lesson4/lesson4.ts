const sum3 = (x: number, y: number) => {
    return x + y;
}

// console.log(`>>sum with TS: `, sum3(5, 10));

// error var
console.log(`>>sum with TS: `, sum3(5, `10`));

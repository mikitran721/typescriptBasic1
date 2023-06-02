let arr1: (string | number)[] = [`10000`, 'miki']
arr1.push('HCMC')

// mixed type - it su dung vi kho kiem soat du lieu; co the de TS tu gan kieu du lieu khi gan gia tri default ban dau cho bien -> khong khuyen khich
arr1.push(10000)
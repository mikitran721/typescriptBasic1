let skill: (string | number)[] = ['miki tran', 1000]
skill.push('Maowzi')
skill.push(2023)

// tuple quan trong thu tu loai bien
// dataType, size, order
let skill2: [string, number] = ['Mike', 2021]

let skill3: [boolean, string, number]

skill3 = [true, 'miki', 2023]
// skill3=['abc','mike','']

/**
 * Tham so la optional
 * dung dau ? ben canh bien
 * can dat o phia cuoi do lai
 */

let skill4: [boolean, string?, number?]
skill4 = [true]

/**
 * tac dung cua: tuple type
 * quy dinh thu tu data type, gia tri tuy chon
 */
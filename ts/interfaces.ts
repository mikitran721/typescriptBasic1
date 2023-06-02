/**
 * interface - dung nhieu trong TS
 * co interface function & class
 * interface thien ve OOP ~ nana type {..} cua TS
 * co the cong gop Interface
 */

interface IPerson {
    readonly firstName: string;
    lastName?: string;//optionnal params 
    add?: string;
}

type Dog5 = {
    firstName: string;
    lastName: string;
}

function getFullName(person: IPerson) {
    // person.firstName = 'glass'; not bz readonly
    return `${person.firstName}-${person.lastName}`
}

let person = {
    firstName: 'Miki',
    lastName: 'Warrious'
};

console.log(getFullName(person))

/**
 * dung interface de define cau truc du lieu cho bien cho gon gang
 * convention: tendau viet hoa, nen them chu I de phan biet
 * co the su dung: readonly, optional params
 */

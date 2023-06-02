/**
 * enum tuong tu const
 * co the nhom gia tri lai
 * gia tri nhan dc la index
 * o frontend: dong bo hoa cu phap
 * enum huu dung hon khi su dung o BE - KHI QUAN TAM TOI VALUE cua no hon
 * khi khong dat value, mac dinh se lay theo chi so nhu cua array
 */

enum LocalStorage {
    USER_INFO = "user-info",
    PROFILE_INFO = "profile-info"
}

const doSomething = (l: LocalStorage) => {
    return l;
}

// call
/*
doSomething("foo"); //error
doSomething("user-info"); //error
*/

doSomething(localStorage.USER_INFO);

enum API_STATUS {
    PENDING = "PENDING",
    FULLFILLED = "FULLFILLED",
    REJECTED = "REJECTED"
}

let x = API_STATUS.PENDING
let x2 = API_STATUS.REJECTED

console.log(`>> x: `, x, `, x2: `, x2)
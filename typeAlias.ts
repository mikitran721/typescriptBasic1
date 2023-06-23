/* TYPE ALIAS */
type StringOrNumber = string | number;
// kieu object
type Student ={
    name:string;
    id:StringOrNumber
}

const studentDetails = (id:StringOrNumber, studentName:string):void =>{
    console.log(`Student ${studentName} has id: ${id}`)
}

const greet = (user:Student) =>{
    console.log(`${user.name} with id ${user.id} says hello`)
}

//goi thuc hien
greet({name:'miki',id:'2235'})
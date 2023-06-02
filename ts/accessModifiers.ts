/**
 * gioi han pham vi su dung bien
 * bien mac dinh la public
 * private: bien chi co the sua doi ben trong class
 * de capnhat & lay private: sd getter/setter
 * protected -> dung trong ke thua class; son se ko truy cap dc va cua parents.
 * - protected: gioi han pham vi truy cap bien
 */
class Employee {
    public empCode: string;
    empName: string;
    private add: string;

    constructor(empCode: string = '0010', empName: string = 'Maowz', add: string = 'HCMC') {
        this.empCode = empCode;
        this.empName = empName;
        this.add = add
    }
}

let emp = new Employee();
emp.empCode = `123`;
emp.empName = 'Miki'
// emp.add = 'Thai Nguyen'; cannot bz private var

/** protected */
class EmployeeDad {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
}

let em1 = new EmployeeDad('miki', 4000);
// em1.empCode = 50000; -> error: do la protected

class SalesEmployee extends EmployeeDad {
    private department: string;

    constructor(name: string, code: number, dep: string) {
        super(name, code);
        this.department = dep;
    }
}

let em2 = new SalesEmployee('Poo', 5000, 'NodeJS')
// em2.department = '002'; -->error bz private var
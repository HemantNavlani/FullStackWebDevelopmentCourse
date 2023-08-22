class Employee {
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        return this.salary;
    }
}
let emp = new Employee("Hemant","CEO",100000000);
console.log(emp.getSalary())

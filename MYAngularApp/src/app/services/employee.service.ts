import {Employee} from "../models/employee";

export class EmployeeService{
    employees:Employee[];
    constructor(){
        this.employees = [
            new Employee(101,"Tim",21,"assets/pizza1.jfif"),
            new Employee(102,"Yum",37,"assets/pizza2.jfif")
        ]
    }

    getEmployees(){
        return this.employees;
    }

    getEmployee(id:number):Employee{
        var employee:Employee = new Employee();
        this.employees.forEach(element =>{
            if(element.id == id)
            employee = element;
        });
        return employee;
    }
}
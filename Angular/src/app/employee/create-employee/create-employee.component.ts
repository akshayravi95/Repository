import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import{Router} from '@angular/router'
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  formdata:FormGroup;
  constructor(private router:Router,private employeeservice:EmployeeService) { }
  employees;
  employee;

  ngOnInit() {
    this.formdata=new FormGroup({
      employeename: new FormControl('',[Validators.required]),
      designation: new FormControl('',[Validators.required]),
      managerid: new FormControl('',[]),
      contactno: new FormControl('',[Validators.required]),
      emailid: new FormControl('',[Validators.required,Validators.pattern('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')]),
      skillset: new FormControl('',[Validators.required])
    })
    this.employeeservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.loadEmployees()
  }
  loadEmployees()
  { 
    this.employeeservice.getallemployees();
    this.employeeservice.employees$.subscribe(
      data=>{
        console.log(data);
        this.employees=data;
      }
    )
  }
  onclicksubmit(employee)
  { 
    this.employeeservice.createemployee(employee);
    this.router.navigate(['/Employees']);

  }

}

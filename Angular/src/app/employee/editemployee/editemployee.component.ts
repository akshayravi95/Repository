import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute,private router:Router,private employeeservice:EmployeeService) { }
  employees;
  formdata:FormGroup;
  employee;
  emp;

  ngOnInit() {
    this.formdata=new FormGroup({
      employeename: new FormControl('',[Validators.required]),
      designation: new FormControl('',[Validators.required]),
      managerid: new FormControl('',[]),
      contactno: new FormControl('',[Validators.required]),
      emailid: new FormControl('',[Validators.required,Validators.pattern('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')]),
      skillset: new FormControl('',[Validators.required])
  }
)
this.employeeservice.errorresponse$.subscribe(message=>{
  console.log(message);
  alert(message);
}
);
    this.loadEmployees();
    this.showemployee();
  }
  loadEmployees()
  {
    this.employeeservice.getallemployees();
    this.employeeservice.employees$.subscribe(
      data=>{
        console.log(data);
        this.employees=data;
      }
    );
  }
  onclicksubmit(employee)
  { 
    this.employeeservice.editemployee(employee,this.id);
    this.router.navigate(['/Employees']);

  }
  showemployee()
  { 
    this.employeeservice.getemployeebyid(this.id);
    this.employeeservice.employee$.subscribe(
      data=>{
        console.log(data);
        this.emp=data;
        this.formdata=new FormGroup({
          employeename: new FormControl(this.emp.employeename,[]),
          designation: new FormControl(this.emp.designation,[]),
          managerid: new FormControl(this.emp.managerid,[]),
          contactno: new FormControl(this.emp.contactno,[Validators.required]),
          emailid: new FormControl(this.emp.emailid,[Validators.required,Validators.pattern('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')]),
          skillset: new FormControl(this.emp.skillset,[Validators.required])
      }
    )
      }
    );
    
  }

}

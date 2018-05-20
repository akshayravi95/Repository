import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute,private router:Router,private employeeservice:EmployeeService) { }
  employees;
  emp;


  ngOnInit() {
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
  onclicksubmit()
  {
    this.employeeservice.deleteemployee(this.id);
    this.router.navigate(['/Employees']);

  }
  showemployee()
  {
    this.employeeservice.getemployeebyid(this.id);
    this.employeeservice.employee$.subscribe(
      data=>{
        console.log(data);
        this.emp=data;
        this.emp.employeename;
        this.emp.designation;
      }
    )
}
}

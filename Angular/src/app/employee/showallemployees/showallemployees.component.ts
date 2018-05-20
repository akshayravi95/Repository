import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-showallemployees',
  templateUrl: './showallemployees.component.html',
  styleUrls: ['./showallemployees.component.css']
})
export class ShowallemployeesComponent implements OnInit {

  constructor( private employeeservice:EmployeeService) { }
  employees;
  ngOnInit() {
    this.employeeservice.employees$.subscribe(data =>{
      this.employees=data;
      console.log(data);
    });
    this.employeeservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    });
    this.employeeservice.getallemployees();
  }

}

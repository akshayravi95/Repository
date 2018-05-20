import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import{ Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseurl ='http://localhost:62877'
  private employees = new Subject<any>();
  employees$ = this.employees.asObservable();

  private employee = new Subject<any>();
  employee$ = this.employee.asObservable();


  private errorresponse = new Subject<any>();
  errorresponse$ = this.errorresponse.asObservable();

  constructor(private crudservice:CrudService) { }

  getallemployees(){
    const url =`${this.baseurl}/api/Employee`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.employees.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  createemployee(employee){
    const url=`${this.baseurl}/api/Employee`
    this.crudservice.Create(url,employee).subscribe(
      data=>{},error =>{
        console.log(error);
        this.errorresponse.next(error);
      
      }
    )
  }
  editemployee(employee,id){
    const url=`${this.baseurl}/api/Employee/${id}`
    this.crudservice.Update(url,employee).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    )
  }
  deleteemployee(id){
    const url=`${this.baseurl}/api/Employee/${id}`
    this.crudservice.Delete(url).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    )
  }
  getemployeebyid(id)
  {
    const url =`${this.baseurl}/api/Employee/${id}`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.employee.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }

}



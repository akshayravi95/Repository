import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import{ Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseurl ='http://localhost:62877'
  private tasks = new Subject<any>();
  tasks$ = this.tasks.asObservable();

  private task = new Subject<any>();
  task$ = this.task.asObservable();

  private errorresponse = new Subject<any>();
  errorresponse$ = this.errorresponse.asObservable();

  constructor(private crudservice:CrudService) { }

  getalltasks(){
    const url =`${this.baseurl}/api/Task`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.tasks.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  createtask(task){
    const url=`${this.baseurl}/api/Task`
    this.crudservice.Create(url,task).subscribe(
      data=>{},error =>{
        console.log(error);
        this.errorresponse.next(error);
      
      }
    )
  }
  edittask(task,id){
    const url=`${this.baseurl}/api/Task/${id}`
    this.crudservice.Update(url,task).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  deletetask(id){
    const url=`${this.baseurl}/api/Task/${id}`
    this.crudservice.Delete(url).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    )
  }
  gettaskbyid(id)
  {
    const url =`${this.baseurl}/api/Task/${id}`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.task.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  
}

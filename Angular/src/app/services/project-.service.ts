import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import{ Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseurl ='http://localhost:62877'
  private projects = new Subject<any>();
  projects$ = this.projects.asObservable();

  private project = new Subject<any>();
  project$ = this.project.asObservable();

  private errorresponse = new Subject<any>();
  errorresponse$ = this.errorresponse.asObservable();

  constructor(private crudservice:CrudService) { }

  getallprojects(){
    const url =`${this.baseurl}/api/Project`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.projects.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  createproject(project){
    const url=`${this.baseurl}/api/Project`
    this.crudservice.Create(url,project).subscribe(
      data=>{},error =>{
        console.log(error);
        this.errorresponse.next(error);
      
      }
    )
  }
  editproject(project,id){
    const url=`${this.baseurl}/api/Project/${id}`
    this.crudservice.Update(url,project).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  deleteproject(id){
    const url=`${this.baseurl}/api/Project/${id}`
    this.crudservice.Delete(url).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    )
  }
  getprojectbyid(id)
  {
    const url =`${this.baseurl}/api/Project/${id}`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.project.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  
}

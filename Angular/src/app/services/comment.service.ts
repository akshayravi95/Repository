import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import{ Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseurl ='http://localhost:62877'
  private comments = new Subject<any>();
  comments$ = this.comments.asObservable();

  private comment = new Subject<any>();
  comment$ = this.comment.asObservable();

  private errorresponse = new Subject<any>();
  errorresponse$ = this.errorresponse.asObservable();

  constructor(private crudservice:CrudService) { }

  getallcomments(){
    const url =`${this.baseurl}/api/ManagerComment`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.comments.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  createcomment(comment){
    const url=`${this.baseurl}/api/ManagerComment`
    this.crudservice.Create(url,comment).subscribe(
      data=>{},error =>{
        console.log(error);
        this.errorresponse.next(error);
      
      }
    )
  }
  editproject(comment,id){
    const url=`${this.baseurl}/api/ManagerComment/${id}`
    this.crudservice.Update(url,comment).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  deletecomment(id){
    const url=`${this.baseurl}/api/ManagerComment/${id}`
    this.crudservice.Delete(url).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    )
  }
  getcommentid(id)
  {
    const url =`${this.baseurl}/api/ManagerComment/${id}`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.comment.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  getcommentsbyproject(id){
    const url =`${this.baseurl}/api/ManagerComment/getall/${id}`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.comments.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  
}

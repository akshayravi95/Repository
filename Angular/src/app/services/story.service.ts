import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import{ Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  baseurl ='http://localhost:62877'
  private stories = new Subject<any>();
  stories$ = this.stories.asObservable();

  private story = new Subject<any>();
  story$ = this.story.asObservable();

  private errorresponse = new Subject<any>();
  errorresponse$ = this.errorresponse.asObservable();

  constructor(private crudservice:CrudService) { }

  getallstories(){
    const url =`${this.baseurl}/api/UserStory`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.stories.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  createstory(story){
    const url=`${this.baseurl}/api/UserStory`
    this.crudservice.Create(url,story).subscribe(
      data=>{},error =>{
        console.log(error);
        this.errorresponse.next(error);
      
      }
    )
  }
  editstory(story,id){
    const url=`${this.baseurl}/api/UserStory/${id}`
    this.crudservice.Update(url,story).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  deletestory(id){
    const url=`${this.baseurl}/api/UserStory/${id}`
    this.crudservice.Delete(url).subscribe(
      data=>{},error=>{
        console.log(error);
        this.errorresponse.next(error);
      }
    )
  }
  getstorybyid(id)
  {
    const url =`${this.baseurl}/api/UserStory/${id}`;
    this.crudservice.Read(url).subscribe(
      data =>{
        this.story.next(data);
      },
      error =>{
        console.log(error);
        this.errorresponse.next(error);
      }
    );
  }
  
}

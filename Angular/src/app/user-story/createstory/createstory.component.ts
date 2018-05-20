import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { StoryService } from '../../services/story.service';
import { ProjectService } from '../../services/project-.service';

@Component({
  selector: 'app-createstory',
  templateUrl: './createstory.component.html',
  styleUrls: ['./createstory.component.css']
})
export class CreatestoryComponent implements OnInit {
formdata:FormGroup;
  constructor(private router:Router,private storyservice : StoryService,private projectservice : ProjectService) { }
story;
projects;
  ngOnInit() {
    this.formdata=new FormGroup({
      story: new FormControl('',[Validators.required]),
      projectid: new FormControl('',[Validators.required])
    }
  )
  this.storyservice.errorresponse$.subscribe(message=>{
    console.log(message);
    alert(message);
  }
  );
   this.loadproject();
  }
  loadproject()
  { 
    this.projectservice.getallprojects();
    this.projectservice.projects$.subscribe(
      data=>{
        console.log(data);
        this.projects=data;
      }
    )
  }
  onclicksubmit(story)
  {
    this.storyservice.createstory(story);
    this.router.navigate(['/UserStories']);

  }

}

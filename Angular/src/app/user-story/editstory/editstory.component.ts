import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { StoryService } from '../../services/story.service';
import { ProjectService } from '../../services/project-.service';


@Component({
  selector: 'app-editstory',
  templateUrl: './editstory.component.html',
  styleUrls: ['./editstory.component.css']
})
export class EditstoryComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private storyservice : StoryService,private projectservice : ProjectService) { }
  stor;
  stories;
  projects;
formdata:FormGroup;
id=this.route.snapshot.paramMap.get('id');
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
  this.showstory();
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
  showstory(){
    this.storyservice.getstorybyid(this.id);
    this.storyservice.story$.subscribe(
      data=>{
        console.log(data);
        this.stor=data;
        this.formdata=new FormGroup({
          story: new FormControl(this.stor.story,[Validators.required]),
          projectid: new FormControl(this.stor.projectid,[Validators.required])
        }
      )
    }
  );
}
  onclicksubmit(stories)
  {
    this.storyservice.editstory(stories,this.id);
    //this.http.put(`http://localhost:62877/api/UserStory/${this.id}`,stories).subscribe();
    this.router.navigate(['/UserStories']);

  }

}

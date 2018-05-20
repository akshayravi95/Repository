import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-deletestory',
  templateUrl: './deletestory.component.html',
  styleUrls: ['./deletestory.component.css']
})
export class DeletestoryComponent implements OnInit {
  task;
  tasks;
  id=this.route.snapshot.paramMap.get('id');
  constructor(private router:Router,private route:ActivatedRoute,private storyservice : StoryService) { }
  stor;

  ngOnInit() {
    this.storyservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.showstory();
  }
  showstory(){
    this.storyservice.getstorybyid(this.id);
    this.storyservice.story$.subscribe(
      data=>{
        console.log(data);
        this.stor=data;
      
    }
  );
}
onclicksubmit()
  {
    this.storyservice.deletestory(this.id);
    //this.http.delete(`http://localhost:62877/api/UserStory/${this.id}`).subscribe();
    this.router.navigate(['/UserStories']);

  }
}

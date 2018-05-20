import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-showalluserstories',
  templateUrl: './showalluserstories.component.html',
  styleUrls: ['./showalluserstories.component.css']
})
export class ShowalluserstoriesComponent implements OnInit {

  constructor(private storyservice :StoryService) { }
  stories;

  ngOnInit() {
    this.storyservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.loadStory()
  }
  loadStory(){
    this.storyservice.getallstories();
    this.storyservice.stories$.subscribe(
      data=>{
        console.log(data);
        this.stories=data;
      }
    )
  }

}

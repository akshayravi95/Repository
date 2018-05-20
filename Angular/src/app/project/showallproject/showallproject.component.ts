import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-.service';

@Component({
  selector: 'app-showallproject',
  templateUrl: './showallproject.component.html',
  styleUrls: ['./showallproject.component.css']
})
export class ShowallprojectComponent implements OnInit {

  constructor(private projectservice:ProjectService) { }
  projs;
  ngOnInit() {
    this.projectservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.loadprojs();
  }
  loadprojs(){
    this.projectservice.getallprojects()
    this.projectservice.projects$.subscribe(
      data=>{
        console.log(data);
        this.projs=data;
      }
    )

  }

}

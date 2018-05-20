import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ProjectService } from '../../services/project-.service';

@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute,private router:Router,private projectservice:ProjectService) { }
  projects;
  project;
  ngOnInit() {
    this.projectservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.showproject();
  }


showproject()
  {
    this.projectservice.getprojectbyid(this.id);
    this.projectservice.project$.subscribe(
    //this.http.get(`http://localhost:62877/api/Project/${this.id}`).subscribe(
      data=>{
        console.log(data);
        this.project=data;
  }
  

  );
}
onclicksubmit()
  {
    this.projectservice.deleteproject(this.id);
    this.router.navigate(['/Projects']);

  }
}



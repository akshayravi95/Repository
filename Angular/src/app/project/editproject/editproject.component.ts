import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ProjectService } from '../../services/project-.service';


@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute,private router:Router,private projectservice:ProjectService) { }
  formdata:FormGroup;
  projects;
  project;

  ngOnInit() {
    this.formdata=new FormGroup({
      projectname: new FormControl('',[Validators.required]),
      startdate: new FormControl('',[Validators.required]),
      enddate: new FormControl('',[Validators.required]),
      clientname: new FormControl('',[Validators.required])
    }
  )
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
      data=>{
        console.log(data);
        this.project=data;
        this.formdata=new FormGroup({
          projectname: new FormControl(this.project.projectname,[Validators.required]),
          startdate: new FormControl(this.project.startdate,[Validators.required]),
          enddate: new FormControl(this.project.enddate,[Validators.required]),
          clientname: new FormControl(this.project.clientname,[Validators.required])
        }
      )

  }
  

  );
}
onclicksubmit(project)
  {
    this.projectservice.editproject(project,this.id);
    this.router.navigate(['/Projects']);

  }
}

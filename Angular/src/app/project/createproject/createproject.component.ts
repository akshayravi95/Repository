import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ProjectService } from '../../services/project-.service';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  formdata:FormGroup;
  constructor(private router:Router,private projectservice:ProjectService) { }
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
  }
  onclicksubmit(project)
  {
    this.projectservice.createproject(project);
    this.router.navigate(['/Projects']);

  }


}

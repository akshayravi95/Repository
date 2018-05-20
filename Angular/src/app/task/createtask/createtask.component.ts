import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { EmployeeService } from '../../services/employee.service';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  constructor(
    private router:Router,
    private taskservice:TaskService,
    private storyservice: StoryService,
    private employeeservice: EmployeeService) { }
  task;
  employees;
  stories;
formdata:FormGroup;
  ngOnInit() {
    this.formdata=new FormGroup({
      empid: new FormControl('',[Validators.required]),
      taskstartdate: new FormControl('',[Validators.required]),
      taskenddate: new FormControl('',[Validators.required]),
      taskcompletion: new FormControl('',[Validators.required]),
      userstoryid: new FormControl('',[Validators.required])
    }
  );
  this.taskservice.errorresponse$.subscribe(message=>{
    console.log(message);
    alert(message);
  }
  );
  this.loadEmployees();
  this.loadstory();
  }
  loadEmployees()
  { 
    this.employeeservice.getallemployees();
    this.employeeservice.employees$.subscribe(
      data=>{
        console.log(data);
        this.employees=data;
      }
    )
  }
  loadstory()
  { 
    this.storyservice.getallstories();
    this.storyservice.stories$.subscribe(
      data=>{
        console.log(data);
        this.stories=data;
      }
    )
  }
  onclicksubmit(task)
  {
    this.taskservice.createtask(task);
    this.router.navigate(['/Tasks']);

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { EmployeeService } from '../../services/employee.service';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private storyservice: StoryService,
    private employeeservice: EmployeeService,
    private taskservice:TaskService) { }
  task;
  tasks;
  employees;
  stories;
formdata:FormGroup;
id=this.route.snapshot.paramMap.get('id');
  ngOnInit() {
    this.formdata=new FormGroup({
      empid: new FormControl('',[Validators.required]),
      taskstartdate: new FormControl('',[Validators.required]),
      taskenddate: new FormControl('',[Validators.required]),
      taskcompletion: new FormControl('',[Validators.required]),
      userstoryid: new FormControl('',[Validators.required])
    }
  )
  this.taskservice.errorresponse$.subscribe(message=>{
    console.log(message);
    alert(message);
  }
  );
  this.showtasks();
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
  showtasks(){
    this.taskservice.gettaskbyid(this.id);
    this.taskservice.task$.subscribe(
      data=>{
        console.log(data);
        this.task=data;
        this.formdata=new FormGroup({
          empid: new FormControl(this.task.empid,[Validators.required]),
          taskstartdate: new FormControl(this.task.taskstartdate,[Validators.required]),
          taskenddate: new FormControl(this.task.taskenddate,[Validators.required]),
          taskcompletion: new FormControl(this.task.taskcompletion,[Validators.required]),
          userstoryid: new FormControl(this.task.userstoryid,[Validators.required])
  }

        );
      }
    )
  }
  onclicksubmit(tasks)
  {
    this.taskservice.edittask(tasks,this.id);
    this.router.navigate(['/Tasks']);

  }

}

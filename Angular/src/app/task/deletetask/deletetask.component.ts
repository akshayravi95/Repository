import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute,private taskservice:TaskService) { }
  task;
  tasks;
  id=this.route.snapshot.paramMap.get('id');
  ngOnInit() {
    this.taskservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.showtasks();
  }
  showtasks(){
    this.taskservice.gettaskbyid(this.id);
    this.taskservice.task$.subscribe(
      data=>{
        console.log(data);
        this.task=data;
       
      }
    )
  }
  onclicksubmit()
  {
    this.taskservice.deletetask(this.id);
    //this.http.delete(`http://localhost:62877/api/Task/${this.id}`).subscribe();
    this.router.navigate(['/Tasks']);

  }

}

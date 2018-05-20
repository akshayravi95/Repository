import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-showalltasks',
  templateUrl: './showalltasks.component.html',
  styleUrls: ['./showalltasks.component.css']
})
export class ShowalltasksComponent implements OnInit {

  constructor(private taskservice:TaskService) { }
  tasks;
  ngOnInit() {
    this.taskservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.loadTasks();
  }

  loadTasks(){
    this.taskservice.getalltasks();
    this.taskservice.tasks$.subscribe(
      data=>{
        console.log(data);
        this.tasks=data;
      }
    )
  }

}

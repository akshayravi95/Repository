import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.css']
})
export class CreatecommentComponent implements OnInit {
  formdata:FormGroup;
  constructor(private route:ActivatedRoute,private router:Router,private commentservice : CommentService) { }
comment;
id=this.route.snapshot.paramMap.get('id');
  ngOnInit() {
    this.formdata=new FormGroup({
      comments: new FormControl('',[]),
      taskid: new FormControl('',[Validators.required])
    }
  )
  this.commentservice.errorresponse$.subscribe(message=>{
    console.log(message);
    alert(message);
  }
  );
  this.loadid();
  }
  loadid(){
    this.formdata=new FormGroup({
      comments: new FormControl('',[Validators.required]),
      taskid: new FormControl(this.id,[Validators.required])
    }
  );
  }
  onclicksubmit(comment)
  {
    this.commentservice.createcomment(comment);
    this.router.navigate([`/Comments/get/${this.id}`]);

  }


}

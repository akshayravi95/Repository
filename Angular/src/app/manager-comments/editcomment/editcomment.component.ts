import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-editcomment',
  templateUrl: './editcomment.component.html',
  styleUrls: ['./editcomment.component.css']
})
export class EditcommentComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router,private commentservice : CommentService) { }
comment;
formdata:FormGroup;
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
  this.showcomment();
  }
  showcomment(){
    
    this.commentservice.getcommentid(this.id);
    this.commentservice.comment$.subscribe(
      data=>{
        console.log(data);
        this.comment=data;
        this.formdata=new FormGroup({
          comments: new FormControl(this.comment.comments,[Validators.required]),
          taskid: new FormControl(this.comment.taskid,[Validators.required])
        }
      )
    }
  );
}
onclicksubmit(comment)
  {
    this.commentservice.deletecomment(this.id);
    this.router.navigate([`/Comments/get/${this.id}`]);

  }

}

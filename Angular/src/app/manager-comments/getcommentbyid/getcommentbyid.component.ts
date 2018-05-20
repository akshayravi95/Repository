import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-getcommentbyid',
  templateUrl: './getcommentbyid.component.html',
  styleUrls: ['./getcommentbyid.component.css']
})
export class GetcommentbyidComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute,private router:Router,private commentservice : CommentService) { }
  comments;

  ngOnInit() {
    this.commentservice.errorresponse$.subscribe(message=>{
      console.log(message);
      alert(message);
    }
    );
    this.showcomment();
  }
  
showcomment(){
  this.commentservice.getcommentsbyproject(this.id);
  this.commentservice.comments$.subscribe(
    data=>{
      console.log(data);
      this.comments=data;
  
      }
    )

}
}

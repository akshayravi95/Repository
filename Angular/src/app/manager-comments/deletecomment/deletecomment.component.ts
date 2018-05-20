import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-deletecomment',
  templateUrl: './deletecomment.component.html',
  styleUrls: ['./deletecomment.component.css']
})
export class DeletecommentComponent implements OnInit {
  id=this.route.snapshot.paramMap.get('id');
  constructor(private router:Router,private route:ActivatedRoute,private commentservice : CommentService) { }
  comment;

  ngOnInit() {
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
      
    }
  ); 
}
onclicksubmit()
  {
    this.commentservice.deletecomment(this.id);
    //this.http.delete(`http://localhost:62877/api/ManagerComment/${this.id}`).subscribe();
    this.router.navigate([`/Comments/get/${this.id}`]);

  }
}

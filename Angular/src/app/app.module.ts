import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponentComponent} from './home-component/home-component.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowallemployeesComponent } from './employee/showallemployees/showallemployees.component';
import { ShowalltasksComponent } from './Task/showalltasks/showalltasks.component';
import { ShowalluserstoriesComponent } from './user-story/showalluserstories/showalluserstories.component';
import { ShowallprojectComponent } from './project/showallproject/showallproject.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { CreatetaskComponent } from './task/createtask/createtask.component';
import { CreatestoryComponent } from './user-story/createstory/createstory.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { EdittaskComponent } from './task/edittask/edittask.component';
import { DeletetaskComponent } from './task/deletetask/deletetask.component';
import { EditstoryComponent } from './user-story/editstory/editstory.component';
import { DeletestoryComponent } from './user-story/deletestory/deletestory.component';
import { FormsModule } from '@angular/forms';
import { ManagerCommentsComponent } from './manager-comments/manager-comments.component';
import { CreatecommentComponent } from './manager-comments/createcomment/createcomment.component';
import { EditcommentComponent } from './manager-comments/editcomment/editcomment.component';
import { DeletecommentComponent } from './manager-comments/deletecomment/deletecomment.component';
import { EmployeeService } from './services/employee.service';
import { GetcommentbyidComponent } from './manager-comments/getcommentbyid/getcommentbyid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
     EmployeeComponent, 
     ProjectComponent, 
     UserStoryComponent, 
     TaskComponent, 
     HeaderComponent,
      FooterComponent,
      ShowallemployeesComponent,
        ShowalltasksComponent, 
        ShowalluserstoriesComponent, ShowallprojectComponent, CreateEmployeeComponent, CreateprojectComponent, CreatetaskComponent, CreatestoryComponent, EditemployeeComponent,DeleteemployeeComponent, EditprojectComponent, DeleteprojectComponent, EdittaskComponent, DeletetaskComponent, EditstoryComponent, DeletestoryComponent, ManagerCommentsComponent, CreatecommentComponent, EditcommentComponent,  DeletecommentComponent, GetcommentbyidComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [ EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

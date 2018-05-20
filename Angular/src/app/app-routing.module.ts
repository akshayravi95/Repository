import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponentComponent} from './home-component/home-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { TaskComponent } from './task/task.component';
import { ShowallemployeesComponent } from './employee/showallemployees/showallemployees.component';
import { ShowalluserstoriesComponent } from './user-story/showalluserstories/showalluserstories.component';
import { ShowalltasksComponent } from './Task/showalltasks/showalltasks.component';
import { ShowallprojectComponent } from './project/showallproject/showallproject.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { CreatetaskComponent } from './task/createtask/createtask.component';
import { CreatestoryComponent } from './user-story/createstory/createstory.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { EditstoryComponent } from './user-story/editstory/editstory.component';
import { DeletestoryComponent } from './user-story/deletestory/deletestory.component';
import { EdittaskComponent } from './task/edittask/edittask.component';
import { DeletetaskComponent } from './task/deletetask/deletetask.component';
import { ManagerCommentsComponent } from './manager-comments/manager-comments.component';
import { EditcommentComponent } from './manager-comments/editcomment/editcomment.component';
import { DeletecommentComponent } from './manager-comments/deletecomment/deletecomment.component';
import { GetcommentbyidComponent } from './manager-comments/getcommentbyid/getcommentbyid.component';
import { CreatecommentComponent } from './manager-comments/createcomment/createcomment.component';

const routes: Routes=[
  {
    path: 'home',
    component: HomeComponentComponent,
    children: []
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'Employees',
    component:EmployeeComponent,
    children: [{
      path: 'show',
    component: ShowallemployeesComponent,
    children: []
    },
    {
      path: 'edit/:id',
    component: EditemployeeComponent,
    children: []
    },
    {
      path: 'delete/:id',
    component: DeleteemployeeComponent,
    children: []
    },
    {
      path: 'create',
    component: CreateEmployeeComponent,
    children: []
    },
    {
      path: '',
      redirectTo:'/Employees/show',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: 'Projects',
    component:ProjectComponent,
    children: [{
      path: 'show',
    component: ShowallprojectComponent,
    children: []
    },
    {
      path: 'create',
    component:CreateprojectComponent,
    children: []
    },
    {
      path: 'edit/:id',
    component: EditprojectComponent,
    children: []
    },
    {
      path: 'delete/:id',
    component: DeleteprojectComponent,
    children: []
    },
    {
      path: '',
      redirectTo:'/Projects/show',
      pathMatch: 'full'
    }

    ]
  },
  {
    path: 'UserStories',
    component: UserStoryComponent,
    children: [
      {
        path: 'show',
      component:ShowalluserstoriesComponent,
      children: []
      },
      {
        path: 'create',
      component:CreatestoryComponent,
      children: []
      },
      {
        path: 'edit/:id',
      component: EditstoryComponent,
      children: []
      },
      {
        path: 'delete/:id',
      component: DeletestoryComponent,
      children: []
      },
      {
        path: '',
        redirectTo:'/UserStories/show',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'Tasks',
    component:TaskComponent,
    children: [
      {
        path: 'show',
      component:ShowalltasksComponent,
      children: []
      },
      {
        path: 'create',
      component:CreatetaskComponent,
      children: []
      },
      {
        path: 'edit/:id',
      component:EdittaskComponent,
      children: []
      },
      {
        path: 'delete/:id',
      component:DeletetaskComponent,
      children: []
      },
      
      {
        path: '',
        redirectTo:'/Tasks/show',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'Comments',
    component:ManagerCommentsComponent,
    children: [
    {
      path: 'edit/:id',
    component:EditcommentComponent,
    children: []
    },
    {
      path: 'delete/:id',
    component:DeletecommentComponent,
    children: []
    },
    {
      path: 'create/:id',
    component:CreatecommentComponent,
    children: []
    },
    {
      path: 'get/:id',
    component:GetcommentbyidComponent,
    children: []
    },
    {
      path: '',
      redirectTo:'/Tasks/show',
      pathMatch: 'full'
    }
    ]
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TutorialEditorComponent } from './tutorial-editor/tutorial-editor.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {
    path:'', component:AdminComponent,
    children:[
      {
        path :'',
        component:TutorialListComponent
      },
      {
        path :'users',
        component:UsersListComponent
      },
      {
        path:'editor',
        component:TutorialEditorComponent
      }  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path:'', component:TutorialComponent,
    children:[
      {
        path :'',
        component:TutorialListComponent
      },
      {
        path :':id',
        component:TutorialDetailsComponent
      }    
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
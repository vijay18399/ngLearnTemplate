import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialComponent } from './tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    TutorialListComponent,
    TutorialComponent,
    TutorialDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TutorialRoutingModule
  ]
})
export class TutorialModule { }

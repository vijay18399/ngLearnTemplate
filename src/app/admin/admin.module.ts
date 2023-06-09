import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialEditorComponent } from './tutorial-editor/tutorial-editor.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AdminRoutingModule } from './admin-routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    TutorialListComponent,
    TutorialEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DragDropModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { 
  constructor(){
    console.log("AdminModule")
  }
}

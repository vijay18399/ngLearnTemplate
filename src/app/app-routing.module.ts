import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './links/links.component';
import { TutorialModule } from './tutorial/tutorial.module';

const routes: Routes = [
  {
    path:'tutorials', loadChildren: () => import('./tutorial/tutorial.module').then(m => m.TutorialModule)
  },
  {
    path:'dashboard', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'', component:LinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

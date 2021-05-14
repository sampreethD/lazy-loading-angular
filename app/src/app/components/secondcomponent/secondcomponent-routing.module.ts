import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondcomponentComponent } from './secondcomponent.component';


const routes: Routes = [
  {
    path:'',
    component:SecondcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondcomponentRoutingModule { }

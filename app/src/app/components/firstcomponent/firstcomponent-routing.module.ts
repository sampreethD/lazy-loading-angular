import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent.component';


const routes: Routes = [
  {
    path:'',
    component:FirstcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstcomponentRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path:'firstcomponent',
    loadChildren: ()=>import('./components/firstcomponent/firstcomponent.module').then(mod=>mod.FirstcomponentModule)
  },
  {
    path:'secondcomponent',
    loadChildren: ()=> import('./components/secondcomponent/secondcomponent.module').then(mod=>mod.SecondcomponentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstcomponentRoutingModule } from './firstcomponent-routing.module';
import { FirstcomponentComponent } from './firstcomponent.component';


@NgModule({
  declarations: [FirstcomponentComponent],
  imports: [
    CommonModule,
    FirstcomponentRoutingModule
  ]
})
export class FirstcomponentModule { }

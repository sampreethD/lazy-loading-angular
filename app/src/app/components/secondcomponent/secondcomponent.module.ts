import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondcomponentRoutingModule } from './secondcomponent-routing.module';
import { SecondcomponentComponent } from './secondcomponent.component';


@NgModule({
  declarations: [SecondcomponentComponent],
  imports: [
    CommonModule,
    SecondcomponentRoutingModule
  ]
})
export class SecondcomponentModule { }

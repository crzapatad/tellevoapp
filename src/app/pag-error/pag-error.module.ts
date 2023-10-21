import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagErrorPageRoutingModule } from './pag-error-routing.module';

import { PagErrorPage } from './pag-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagErrorPageRoutingModule
  ],
  declarations: [PagErrorPage]
})
export class PagErrorPageModule {}

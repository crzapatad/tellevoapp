import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagErrorPage } from './pag-error.page';

const routes: Routes = [
  {
    path: '',
    component: PagErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagErrorPageRoutingModule {}

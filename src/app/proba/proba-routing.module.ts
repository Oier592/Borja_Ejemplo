import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbaPage } from './proba.page';

const routes: Routes = [
  {
    path: '',
    component: ProbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProbaPageRoutingModule {}

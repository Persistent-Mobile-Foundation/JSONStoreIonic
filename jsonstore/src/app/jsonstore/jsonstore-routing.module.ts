import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonstorePage } from './jsonstore.page';

const routes: Routes = [
  {
    path: '',
    component: JsonstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonstorePageRoutingModule {}

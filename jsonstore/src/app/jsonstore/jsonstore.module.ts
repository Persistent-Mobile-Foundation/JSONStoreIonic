import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsonstorePageRoutingModule } from './jsonstore-routing.module';

import { JsonstorePage } from './jsonstore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsonstorePageRoutingModule
  ],
  declarations: [JsonstorePage]
})
export class JsonstorePageModule {}

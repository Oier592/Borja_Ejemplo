import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProbaPageRoutingModule } from './proba-routing.module';

import { ProbaPage } from './proba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProbaPageRoutingModule
  ],
  declarations: [ProbaPage]
})
export class ProbaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingdetailPageRoutingModule } from './settingdetail-routing.module';

import { SettingdetailPage } from './settingdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingdetailPageRoutingModule
  ],
  declarations: [SettingdetailPage]
})
export class SettingdetailPageModule {}

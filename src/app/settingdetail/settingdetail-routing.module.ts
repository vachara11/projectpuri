import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingdetailPage } from './settingdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SettingdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingdetailPageRoutingModule {}

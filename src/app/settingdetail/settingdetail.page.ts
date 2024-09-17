import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settingdetail',
  templateUrl: './settingdetail.page.html',
  styleUrls: ['./settingdetail.page.scss'],
})
export class SettingdetailPage implements OnInit {
  item:any;
  constructor(private router:Router ) {
    const navigation = this.router.getCurrentNavigation();
      this.item = navigation?.extras?.state?.['i'];
  }

  ngOnInit() {
  }

}

import { state } from '@angular/animations';
import { Component, OnInit , ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  
  items=[
    {
      id: 1,
      name:'น้ำส้ม',
      price:'60บาท',
      imageURL:'assets/img/download (9).jfif',
      printable: 'หวานหอมสดชื่นอร่อยถูกใจ',
    },
    {
      id: 2,
      name:'น้ำฝรั่ง',
      price:'60บาท',
      imageURL:'assets/img/download (2).jfif',
      printable: 'หวานอร่อยหอมกลิ่นฝรั่ง',
    },{
      id: 3,
      name:'น้ำเสาวรส',
      price:'60บาท',
      imageURL:'assets/img/download (1).jfif',
      printable: 'หวานเปรียวสดชื่นหอมเสาวรส',
    },{
      id: 4,
      name:'น้ำกระชาย',
      price:'60บาท',
      imageURL:'assets/img/download (3).jfif',
      printable: 'กินงายดีต่อสุขภาพอร่อยถูกใจ',
    }
  ];


  constructor(private K:NavController) {}

     gotosettingdtail(i:any){
          this.K.navigateForward('/settingdetail',{state:{i}});
     }


  ngOnInit() {}
}

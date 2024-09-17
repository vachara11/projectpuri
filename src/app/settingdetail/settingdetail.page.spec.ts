import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingdetailPage } from './settingdetail.page';

describe('SettingdetailPage', () => {
  let component: SettingdetailPage;
  let fixture: ComponentFixture<SettingdetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

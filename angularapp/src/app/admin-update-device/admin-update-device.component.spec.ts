import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDeviceComponent } from './admin-update-device.component';

describe('AdminUpdateDeviceComponent', () => {
  let component: AdminUpdateDeviceComponent;
  let fixture: ComponentFixture<AdminUpdateDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateDeviceComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

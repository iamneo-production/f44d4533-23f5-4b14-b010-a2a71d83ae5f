import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDeviceComponent } from './admin-add-device.component';

describe('AdminAddDeviceComponent', () => {
  let component: AdminAddDeviceComponent;
  let fixture: ComponentFixture<AdminAddDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddDeviceComponent]
    });
    fixture = TestBed.createComponent(AdminAddDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

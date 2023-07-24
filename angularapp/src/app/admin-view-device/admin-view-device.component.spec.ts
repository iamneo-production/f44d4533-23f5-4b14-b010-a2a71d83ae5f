import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDeviceComponent } from './admin-view-device.component';

describe('AdminViewDeviceComponent', () => {
  let component: AdminViewDeviceComponent;
  let fixture: ComponentFixture<AdminViewDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewDeviceComponent]
    });
    fixture = TestBed.createComponent(AdminViewDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

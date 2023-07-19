import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateEmployeeComponent } from './admin-update-employee.component';

describe('AdminUpdateEmployeeComponent', () => {
  let component: AdminUpdateEmployeeComponent;
  let fixture: ComponentFixture<AdminUpdateEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateEmployeeComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

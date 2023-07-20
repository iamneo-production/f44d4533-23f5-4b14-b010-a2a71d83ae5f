import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeComponent } from './admin-employee.component';

describe('AdminEmployeeComponent', () => {
  let component: AdminEmployeeComponent;
  let fixture: ComponentFixture<AdminEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEmployeeComponent]
    });
    fixture = TestBed.createComponent(AdminEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

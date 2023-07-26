import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEmployeeComponent } from './admin-add-employee.component';

describe('AdminAddEmployeeComponent', () => {
  let component: AdminAddEmployeeComponent;
  let fixture: ComponentFixture<AdminAddEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddEmployeeComponent]
    });
    fixture = TestBed.createComponent(AdminAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

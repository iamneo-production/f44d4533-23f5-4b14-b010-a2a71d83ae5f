import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEmployeeComponent } from './admin-view-employee.component';

describe('AdminViewEmployeeComponent', () => {
  let component: AdminViewEmployeeComponent;
  let fixture: ComponentFixture<AdminViewEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewEmployeeComponent]
    });
    fixture = TestBed.createComponent(AdminViewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

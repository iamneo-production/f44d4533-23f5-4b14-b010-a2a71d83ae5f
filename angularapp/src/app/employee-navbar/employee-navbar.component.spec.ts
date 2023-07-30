import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNavbarComponent } from './employee-navbar.component';

describe('EmployeeNavbarComponent', () => {
  let component: EmployeeNavbarComponent;
  let fixture: ComponentFixture<EmployeeNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeNavbarComponent]
    });
    fixture = TestBed.createComponent(EmployeeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

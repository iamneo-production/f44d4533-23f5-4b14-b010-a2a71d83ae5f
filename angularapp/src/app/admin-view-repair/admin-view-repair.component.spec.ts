import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRepairComponent } from './admin-view-repair.component';

describe('AdminViewRepairComponent', () => {
  let component: AdminViewRepairComponent;
  let fixture: ComponentFixture<AdminViewRepairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewRepairComponent]
    });
    fixture = TestBed.createComponent(AdminViewRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

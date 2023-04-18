import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttiveUserComponent } from './attive-user.component';

describe('AttiveUserComponent', () => {
  let component: AttiveUserComponent;
  let fixture: ComponentFixture<AttiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttiveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

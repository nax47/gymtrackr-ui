import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoutineDialogComponent } from './new-routine-dialog.component';

describe('NewRoutineDialogComponent', () => {
  let component: NewRoutineDialogComponent;
  let fixture: ComponentFixture<NewRoutineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRoutineDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoutineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

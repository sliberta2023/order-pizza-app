import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrderSubmitComponent } from './dialog-order-submit.component';

describe('DialogOrderSubmitComponent', () => {
  let component: DialogOrderSubmitComponent;
  let fixture: ComponentFixture<DialogOrderSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOrderSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOrderSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

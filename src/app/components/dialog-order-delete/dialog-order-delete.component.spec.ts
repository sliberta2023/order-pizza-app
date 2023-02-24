import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrderDeleteComponent } from './dialog-order-delete.component';

describe('DialogOrderDeleteComponent', () => {
  let component: DialogOrderDeleteComponent;
  let fixture: ComponentFixture<DialogOrderDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOrderDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOrderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

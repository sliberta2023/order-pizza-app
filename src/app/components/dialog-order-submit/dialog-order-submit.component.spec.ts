import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedMaterialsModule } from 'src/app/materials.module';

import { DialogOrderSubmitComponent } from './dialog-order-submit.component';

describe('DialogOrderSubmitComponent', () => {
  let component: DialogOrderSubmitComponent;
  let fixture: ComponentFixture<DialogOrderSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedMaterialsModule],
      declarations: [ DialogOrderSubmitComponent ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {data: {}}}
      ]
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

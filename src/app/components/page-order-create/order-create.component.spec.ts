import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';

import { PageOrderCreate } from './order-create.component';

describe('OrderCreateComponent', () => {
  let component: PageOrderCreate;
  let fixture: ComponentFixture<PageOrderCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ],
      declarations: [ PageOrderCreate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOrderCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';

import { PageOrderDetails } from './page-order-details.component';

describe('PageOrderDetailsComponent', () => {
  let component: PageOrderDetails;
  let fixture: ComponentFixture<PageOrderDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ],
      declarations: [ PageOrderDetails ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOrderDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

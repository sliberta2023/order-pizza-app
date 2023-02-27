import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';

import { PageOrderList } from './order-list.component';

describe('OrderListComponent', () => {
  let component: PageOrderList;
  let fixture: ComponentFixture<PageOrderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ],
      declarations: [ PageOrderList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOrderList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

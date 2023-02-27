import { TestBed } from '@angular/core/testing';
import { OrderUI } from '../interfaces/order';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [
        SharedService
      ]
    })

    service = TestBed.inject(SharedService);
  });

  it('should create SharedService', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to convert an API to a UI object', () => {
    const orderUI: OrderUI = service.convertApiToUIOrder(sampleAPIResponse[0]);
    expect(orderUI.timestamp).toEqual('2023-02-27T04:07:48.824Z')
  });

  it('should be able to convert multiple API to a UI objects', () => {
    const ordersUI: OrderUI[] = service.convertApiToUIOrders(sampleAPIResponse);
    expect(ordersUI.length).toEqual(sampleAPIResponse.length);
    expect(ordersUI[0].timestamp).toEqual('2023-02-27T04:07:48.824Z');
    expect(ordersUI[1].timestamp).toEqual('2023-03-27T04:07:48.824Z')
  });
});

const sampleAPIResponse = [
    {
        Crust: 'THIN',
        Flavor: 'CHICKEN',
        Order_ID: 1,
        Size: 'M',
        Table_No: 1,
        Timestamp: '2023-02-27T04:07:48.824Z'
    },
    {
        Crust: 'THICK',
        Flavor: 'CHICKEN',
        Order_ID: 2,
        Size: 'S',
        Table_No: 1,
        Timestamp: '2023-03-27T04:07:48.824Z'
    }
];

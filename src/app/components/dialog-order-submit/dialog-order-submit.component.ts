import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { OrderUI } from 'src/app/interfaces/order';

@Component({
  selector: 'app-dialog-order-submit',
  templateUrl: './dialog-order-submit.component.html',
  styleUrls: ['./dialog-order-submit.component.scss']
})
export class DialogOrderSubmitComponent implements OnInit {
  @Output()
  nextClicked: EventEmitter<boolean> = new EventEmitter(false);

  orderItem!: OrderUI;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: OrderUI
  ) {
    this.orderItem = data;
  }

  ngOnInit(): void {
  }

  onClickToListPage(): void {
    this.nextClicked.emit(true);
  }

  getNextClickedEvent(): Observable<boolean> {
    return this.nextClicked.asObservable();
  }

}

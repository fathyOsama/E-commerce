import { OrderHistoryService } from './../../services/order-history.service';
import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit{

  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor (
    private orderHistoryService: OrderHistoryService
  ) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {

    // read the user's email address from browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(theEmail).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;
      }
    )
  }

}

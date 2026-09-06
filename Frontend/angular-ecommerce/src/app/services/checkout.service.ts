import { Purchase } from './../common/purchase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentdev } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = environmentdev.ecommerceApiUrl + '/checkout/purchase';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }
}

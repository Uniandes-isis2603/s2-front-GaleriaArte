import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerDetail } from './buyer-detail';
import {Buyer} from './buyer';

const API_URL = "../../assets/";
const buyers = 'buyer.json';


  @Injectable({
    providedIn: 'root'
  })
export class BuyerService {

  constructor(private http:HttpClient) { }

  getBuyers(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(API_URL + buyers);
}
getBuyer(): Observable<Buyer[]> {
  return this.http.get<Buyer[]>(API_URL + buyers);
}

getBuyerDetail(buyerId): Observable<BuyerDetail> {
  return this.http.get<BuyerDetail>(API_URL + "buyer" + buyerId + ".json");
}
createBuyer(buyer): Observable<Buyer> {
  return this.http.post<Buyer>(API_URL + buyers, buyer);
}
}

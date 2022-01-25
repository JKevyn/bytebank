import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../models/transfer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransfersService {
  private transferList: any[];
  private url = 'http://localhost:3000/transfer';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  addTransfer(transfer: any): Observable<Transfer> {
    this.hydrate(transfer);

    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  private hydrate(transfer: any) {
    transfer.data = new Date();
  }
}

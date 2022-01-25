import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Transfer } from '../models/transfer.model';
import { TransfersService } from '../services/transfers.service';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transfers: any[];

  constructor(private service: TransfersService) {}

  ngOnInit(): void {
    this.service.all().subscribe((transfers: Transfer[]) => {
      this.transfers = transfers;
    })
  }

}

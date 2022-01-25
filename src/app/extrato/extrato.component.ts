import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TransfersService } from '../services/transfers.service';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input() transferDatas: any[];

  constructor(private service: TransfersService) {}

  ngOnInit(): void {
    this.transferDatas = this.service.transfers;
  }

}

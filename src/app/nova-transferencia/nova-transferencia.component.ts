import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransfersService } from '../services/transfers.service';
@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private service: TransfersService) {}

  ngOnInit(): void {
  }

  @Output() toTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  transferir(){
    console.log('Solicitada nova transferência.');

    const emitValue = {value: this.value, destiny: this.destiny};

    this.service.addTransfer(emitValue).subscribe(_ => {
      this.clearFields();
    },
    (error) => console.log(error)
    );
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }

}

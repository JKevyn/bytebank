import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() toTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  transferir(){
    console.log('Solicitada nova transferência.');
    const emitValue = {value: this.value, destiny: this.destiny};
    this.toTransfer.emit(emitValue);
    this.clearFields();
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }

}

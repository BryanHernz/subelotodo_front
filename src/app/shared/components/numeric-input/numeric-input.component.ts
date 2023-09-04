import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent {
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>(); // Definir una propiedad de salida

  increment() {
    this.value++;
    this.valueChange.emit(this.value); // Emitir el valor actualizado
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.valueChange.emit(this.value); // Emitir el valor actualizado
    }
  }
}

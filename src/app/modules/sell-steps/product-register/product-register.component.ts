import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent {

  constructor(private location: Location) {}

  back(): void {
    this.location.back()
  }
}

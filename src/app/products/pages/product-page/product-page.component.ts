import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  private fb = inject( FormBuilder );


  // constructor( private fb: FormBuilder ) { }



}

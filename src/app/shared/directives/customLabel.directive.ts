import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color?: string = 'red'
  private _errors: ValidationErrors | null | undefined;

  @Input() set color(color: string) {
    this._color = color;
    this.setStyle();
  }

  @Input() set errors(errors: ValidationErrors | null | undefined) {
    this._errors = errors;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = this.el;
  }

  setStyle() {
    if( !this.htmlElement || !this._color ) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if( !this.htmlElement ) return;
    if( !this._errors ) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errors = Object.keys( this._errors );

    const errorsMessage = {
      required: () => {
        this.htmlElement!.nativeElement.innerText = 'Este campo es obligatorio';
        return;
      },
      minlength: () => {
        const min = this._errors?.['minlength']['requiredLength'];
        const current = this._errors?.['minlength']['actualLength'];
        this.htmlElement!.nativeElement.innerText = `Este campo requiere al menos 6 caracteres ${current}/${min}`;
        return;
      },
      email: () => {
        this.htmlElement!.nativeElement.innerText = 'Email no valido';
        return;
      }
    }

    errorsMessage[errors[0] as keyof typeof errorsMessage]()

  }

}

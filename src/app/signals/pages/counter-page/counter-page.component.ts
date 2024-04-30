import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  public counter = signal<number>(10)
  public squareCounter = computed(() => this.counter() ** 2)

  public increase(value: number) {

    this.counter.update((current) => current + value);

  }

}

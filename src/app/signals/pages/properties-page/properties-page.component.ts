import { Component, effect, OnDestroy, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  templateUrl: './properties-page.component.html',
})
export class PropertiesPageComponent implements OnDestroy {
  public counter = signal(10)

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`)
  });

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  increaseBy(value: number) {
    this.counter.update(current => current + value)
  }

  onFieldUpdated(field: keyof User, value: string) {

     this.user.update(current => {

      switch(field) {
        case 'email':
          current.email = value
          break;

        case 'avatar':
          current.avatar = value
          break;

        case 'last_name':
          current.last_name = value
          break;

        case 'first_name':
          current.first_name = value
          break;

        case 'id':
          current.id = Number(value)
          break;
      }

      return current
     })
  }
}

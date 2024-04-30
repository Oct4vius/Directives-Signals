import { Component, Signal, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/signals.interfaces';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {


  public menuItems = signal<MenuItem[]>([
    {
      title: 'Counter',
      route: 'counter',
    },
    {
      title: 'User Info',
      route: 'user-info',
    },
    {
      title: 'Properties',
      route: 'properties',
    },
  ])

  // public menuItems: MenuItem[] = [
  //   {
  //     title: 'Counter',
  //     route: 'counter',
  //   },
  //   {
  //     title: 'User Info',
  //     route: 'user-info',
  //   },
  //   {
  //     title: 'Properties',
  //     route: 'properties',
  //   },
  // ];

}

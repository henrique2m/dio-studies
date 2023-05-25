import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  menu = [
    {
      link: 'https://linkedin.com/in/felipe-aguiar-exe',
      label: 'Linkedin',
    },
    {
      link: 'https://github.com/henrique2m',
      label: 'Github',
    },
  ];
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  constructor(private router: Router) {}
  onMenuItemClick(menuItem: string) {
    this.router.navigate([`/${menuItem}`]).then();
  }
}

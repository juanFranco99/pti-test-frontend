import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/']
      }, {
        label: 'Departamentos',
        icon: 'pi pi-map-marker',
        routerLink: ['/departamentos']
      },{
        label: 'Ciudades',
        icon: 'pi pi-building',
        routerLink: ['/ciudades']
      }
    ]
  }


}

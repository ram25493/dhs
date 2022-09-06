import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavItem } from './navbar/navItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DHS NavBar';

  country = ['A', 'B', 'C'];
  @ViewChild(MatSidenav) sideNav!: MatSidenav;


  menu: NavItem [] = [
    {
      displayName: 'Dashboard',
      iconName: 'desktop_windows',
      routerLink: '/home',
    },        
    {
      displayName: 'Program',
      iconName: 'ballot',
    },
    {
      displayName: 'Data Entry Function',
      iconName: '',
      routerLink: ''
    },
    {
      displayName: 'Eligibility Application',
      iconName: '',          
      children: [
        {
          displayName: 'Initial',
          iconName: 'how_to_reg',
          routerLink: 'initial'
        },
        { 
          displayName: 'Update/View',
          iconName: 'waves',
          routerLink: '/'
        },
        { 
          displayName: 'Redeter',
          iconName: 'waves',
          routerLink: '/'
        },
        { 
          displayName: 'Logout',
          iconName: 'waves',
          routerLink: '/'
        }
      ]
    },
    {
      displayName: 'P/A/P Application',
      iconName: '',
    },
    {
      displayName: 'Provider',
      iconName: '',
    },
    { 
      displayName: 'Agency',
      iconName: 'ballot',
      routerLink: '/'
    },
    { 
      displayName: 'Security',
      iconName: 'ballot',
      routerLink: '/'
    },
    { 
      displayName: 'System',
      iconName: 'ballot',
      routerLink: '/'
    },
    { 
      displayName: 'Prefrence',
      iconName: 'ballot',
      routerLink: '/'
    },
    { 
      displayName: 'Logout',
      iconName: 'ballot',
      routerLink: '/'
    },
  ];

}

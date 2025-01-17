import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  constructor(public router:Router){

  }
  login(){
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}

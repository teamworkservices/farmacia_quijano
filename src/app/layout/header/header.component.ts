import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string = 'El usuario';
  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
    alert("Cerrando sesion");
  }
}

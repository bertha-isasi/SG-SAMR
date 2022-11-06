import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[]=[];

  display: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(4), Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])

  })

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // this.menuItems = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-home',
    //     routerLink: ['/home']
    //   }
    // ]
  }

  async singIn() {
    const username = this.loginForm.value.username ? this.loginForm.value.username : ''
    const password = this.loginForm.value.password ? this.loginForm.value.password : ''


  }

  isUserLogger() {
    let res = localStorage.getItem('isUserLogged')
    if(res) {
      return false
    }
    return false
  }

}

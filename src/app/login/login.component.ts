import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submit()
{
  console.log(this.loginForm.value);
}
  constructor() { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'empEmailId':new FormControl(null),
      'password':new FormControl(null)
    })
  }

}

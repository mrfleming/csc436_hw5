import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { EmailService } from 'app/auth/email.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fBuild: FormBuilder, private router: Router, private emailAuth: EmailService) { }

  ngOnInit() {
    this.loginForm = this.fBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.emailAuth.login(this.loginForm.value.username, this.loginForm.value.password);
  }

  logout() {
    this.emailAuth.logout();
  }

}

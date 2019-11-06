import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

// Shared user interface for login
import { User } from './user.interface.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  user: Observable<User>;
  message = '';

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
   }


  login(username: string, password: string) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(username, password)
      .then(value => {
        localStorage.setItem('username', 'user');
        this.message = '';
        console.log('Nice, it worked!', value);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.message = 'Incorrect username and password';
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then(() => {
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
        console.log('Signed out successed');
      });
  }

  getUser(): any {
    console.log(localStorage.getItem('username'));
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
}

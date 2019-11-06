import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  user: Observable<User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  login(username: string, password: string) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(username, password)
      .then(value => {
        console.log('Authentification succeeded!', value);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        console.log('Authentification failed:', err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
        console.log('Signed out successed');
      });
  }

}

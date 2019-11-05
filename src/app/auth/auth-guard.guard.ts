import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService, User } from './auth.service';
// had to separate into 3 imports from 'rxjs/operators'
import { map } from 'rxjs/operator/map';
import { take } from 'rxjs/operator/take';
import 'rxjs/add/operator/take';
// import { tap } from 'rxjs/operator/tap';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user.pipe(
      take(1),
      map((user) => !!user),
      tap((loggedIn) => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/login']);
        }
      }),
    );
  }
}

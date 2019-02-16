import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {auth} from 'firebase/app';
import { take, map, tap } from 'rxjs/operators';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../auth.service'





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   error: any;
constructor( private authService : AuthService , private Auth : AngularFireAuth , private router : Router) {
  // if(this.auth.auth.currentUser != null){
  //   this.router.navigate(['/members'])
  // }

}
  ngOnInit() {
    console.log(this.authService.isAuth().pipe(take(1))
    .pipe(map(authState => !!authState))
    .pipe(tap(auth => {
      if (auth) {
        this.router.navigate(['/members']);
      }
    })))
    
  }
 onGoogle(){
    console.log(this.authService);
    this.authService.loginGoogleUser()
    .then(res => {
      console.log(res)
      this.router.navigateByUrl('/members')
    }).catch (err => console.log(err))
  }

}




 



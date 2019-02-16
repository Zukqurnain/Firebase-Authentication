import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router'

import * as firebase from 'firebase/app';







@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afAuth : AngularFireAuth ,private router : Router ) {}

  googleLogin(){
    return new Promise<any>((res , rej )=>{
      let provider =  new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email')
      this.afAuth.auth.signInWithPopup(provider).then(res =>{
        this.router.navigateByUrl('/members');
      })
    })
  }
}

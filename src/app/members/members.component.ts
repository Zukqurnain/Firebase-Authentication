import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import {Router} from '@angular/router'
import {AuthService} from '../auth.service'
import { auth } from 'firebase/app';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private authService: AuthService , private auth : AngularFireAuth, private router : Router) { }
  Data = []
  ngOnInit() {
    console.log(this.auth.auth.currentUser.uid)
}

logOut(){
  this.authService.logoutUser()
  .then(res => {
    this.router.navigateByUrl('/')
  }).catch()
}
}
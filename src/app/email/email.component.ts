import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators,  FormBuilder , NgForm} from '@angular/forms'
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private authService : AuthService  , private router : Router) {}

  form = new FormGroup({
    email : new FormControl('' ,  [Validators.required , Validators.email] ),
    password : new FormControl('' , Validators.required)
  })

  err: any;
  ngOnInit() {
  }
  emailLogin(email, password){
    this.authService.loginEmailUser(email, password)
    .then(res=> {
      this.router.navigateByUrl('/members');
      console.log(res)})
    .catch(err => this.err = err)
  }

}

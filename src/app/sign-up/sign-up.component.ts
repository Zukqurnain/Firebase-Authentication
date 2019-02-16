import { Component, OnInit } from '@angular/core';
import {FormControl , NgForm , Validators , FormGroup , FormBuilder} from '@angular/forms'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router' 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authservice : AuthService, private router : Router) {}

  form = new FormGroup({
    username : new FormControl('' , [Validators.required , Validators.minLength(3) ]),
    email : new FormControl('' ,  [Validators.required , Validators.email] ),
    password : new FormControl('' , [Validators.required , Validators.minLength(8) ]),
    password1 : new FormControl('' , [Validators.required , Validators.minLength(8)] )
  });

  err: any;
  email;
  password = this.form.value

  

  register(){
    let form = this.form.value;
    this.authservice.registerUser(form.email,form.password1 )
    .then(res => {
      console.log(res)
      this.router.navigateByUrl('/email')
    }).catch(err => this.err = err);
  }

  ngOnInit() {
  }

}

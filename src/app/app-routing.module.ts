import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MembersComponent} from './members/members.component'
import {AuthGuard} from './auth.guard'
const routes: Routes = [
  {path : '' ,  redirectTo : 'login' , pathMatch : 'full' },
  {path : 'login' ,  component: LoginComponent },
  {path : 'email' ,  component: EmailComponent },
  {path : 'signUp' ,  component: SignUpComponent },
  {path : 'members' ,  component: MembersComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

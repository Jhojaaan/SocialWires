import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
//Components
import { CardMessageComponent } from './components/card-message/card-message.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'allmessages',
    component: AllMessagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createmessage',
    component: CreateMessageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

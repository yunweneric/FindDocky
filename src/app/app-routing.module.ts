import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AppComponent } from './app.component';
import { DocumentsDetailsComponent } from './Documents/documents-details/documents-details.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './users/login/login.component';
import { PwdrecoveryComponent } from './users/pwdrecovery/pwdrecovery.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: DocumentsDetailsComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'recover', component: PwdrecoveryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

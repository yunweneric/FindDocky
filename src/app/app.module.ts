import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './users/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecentlyfoundComponent } from './documents/recentlyfound/recentlyfound.component';
import { PwdrecoveryComponent } from './users/pwdrecovery/pwdrecovery.component';
import { UploadComponent } from './upload/upload.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsDetailsComponent } from './Documents/documents-details/documents-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    RecentlyfoundComponent,
    UploadComponent,
    PwdrecoveryComponent,
    DocumentsComponent,
    DocumentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

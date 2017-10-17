import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAjaxService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms'
import { FicheUserComponent } from './fiche-user/fiche-user.component';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    FicheUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserAjaxService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

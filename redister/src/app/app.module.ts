import { AllUserComponent } from './pages/all-user/all-user.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { DialogConfirmationComponent } from './common/dialog-confirmation/dialog-confirmation.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LayoutComponent } from './pages/user/layout/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent, AllUserComponent, DialogConfirmationComponent, HomeComponent, LayoutComponent 
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule
   ],
  providers: [],
  entryComponents: [
    DialogConfirmationComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }

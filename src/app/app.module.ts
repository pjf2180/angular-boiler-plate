import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FirebaseDbModule } from './db/firebase-db/firebase-db.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    FirebaseDbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

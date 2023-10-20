import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.router';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';

import {  ReactiveFormsModule } from '@angular/forms';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    CoursesComponent,
    RegistrationComponent,
    GalleryComponent,
    ContactusComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserComponent } from './user/user.component';


//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
    // to this object, but we are redirecting this path to items path using redirectTo key.
export const router: Routes = [
    { path: '' , redirectTo: '', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'registration',component:RegistrationComponent},
    { path: 'gallery', component:GalleryComponent} ,
    { path:  'contactus', component:ContactusComponent},
    { path:  'about', component:AboutComponent},
    { path:  'user', component:UserComponent}
   
];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);  version 10
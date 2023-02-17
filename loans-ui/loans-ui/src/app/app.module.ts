import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewUsersComponent } from './view-users/view-users.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AddArtWorksComponent } from './art-works/add-art-works/add-art-works.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewArtWorksComponent } from './art-works/view-art-works/view-art-works.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ViewUsersComponent,
    FrontPageComponent,
    ContactsComponent,
    AddArtWorksComponent,
    ViewArtWorksComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
   // OrdersModule,
    //ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

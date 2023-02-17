import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtWorksComponent } from './art-works/add-art-works/add-art-works.component';
import { ViewArtWorksComponent } from './art-works/view-art-works/view-art-works.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {path: '', component:FrontPageComponent},
  {path: 'listUsers', component:ListUsersComponent},
  {path: 'view/:user_id', component: ViewUsersComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'view-art', component:ViewArtWorksComponent},
  {path: 'add-art', component:AddArtWorksComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:RegistrationComponent},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  {path: '**', component:PageNotFoundComponent}
 // { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
 // { path: 'orders', component: ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

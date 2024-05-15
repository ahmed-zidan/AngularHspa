import { Routes } from '@angular/router';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { DetailPropertyComponent } from './Property/detail-property/detail-property.component';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';

export const routes: Routes = [
  {path:'',component:PropertyListComponent},
  {path:'rent',component:PropertyListComponent},
  {path:'property-detail/:id',component:DetailPropertyComponent},
  {path:'add-property',component:AddPropertyComponent},

  {path:'Register' , component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'**' , component:PropertyListComponent},


];

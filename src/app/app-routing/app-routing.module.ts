import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecundariaComponent } from '../secundaria/secundaria.component';

const routes: Routes = [
  { path: 'secundaria', component: SecundariaComponent }
];


@NgModule({  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
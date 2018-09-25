import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecundariaComponent }  from './secundaria/secundaria.component';
import { PrimariaComponent}     from './primaria/primaria.component';

const routes: Routes = [
  { path: 'secundaria', component: SecundariaComponent },
  { path: 'primaria', component: PrimariaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

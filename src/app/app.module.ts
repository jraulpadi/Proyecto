import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecundariaComponent } from './secundaria/secundaria.component';

//import { AppRoutingModule }     from './app-routing.module';
import { PrimariaComponent } from './primaria/primaria.component';


@NgModule({
  declarations: [
    AppComponent,    
    SecundariaComponent, 
    PrimariaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    //AppRoutingModule,     
    HttpModule   
  ],  
  
  bootstrap: [AppComponent]
})
export class AppModule { }

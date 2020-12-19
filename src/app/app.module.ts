import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';

import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';

import { FunComponent } from './application/fun/fun.component';
import { Error404Component } from './application/error404/error404.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { CrudComponent } from './application/crud/crud.component';
import { ContactComponent } from './application/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormulaireComponent,  
    ReadComponent,
    UpdateComponent,
    FunComponent,
    Error404Component,
    TutorielsComponent,
    CrudComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

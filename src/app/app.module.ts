import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FooterComponent } from './all footer/footer/footer.component';
import { Footer2Component } from './all footer/footer2/footer2.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
=======
import { PipesPipe } from './shared/pipes/pipes.pipe';
import { DirectivesDirective } from './shared/directives/directives.directive';
import { HeaderComponent } from './common/header/header.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent,
    Footer2Component,
    NavbarComponent
=======
    PipesPipe,
    DirectivesDirective,
    HeaderComponent,
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

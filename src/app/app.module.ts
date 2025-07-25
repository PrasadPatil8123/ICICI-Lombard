import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './common/all footer/footer/footer.component';
import { Footer2Component } from './common/all footer/footer2/footer2.component';
import { NavbarComponent } from './common/navbar/navbar/navbar.component';
import { PipesPipe } from './shared/pipes/pipes.pipe';
import { DirectivesDirective } from './shared/directives/directives.directive';
import { HeaderComponent } from './common/header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './common/home/home.component';
import { ClaimsModule } from './features/claims/claims.module';



@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,
    // Footer2Component,
    NavbarComponent,
    PipesPipe,
    DirectivesDirective,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Footer2Component,
    CommonModule,
    ButtonModule,
    ClaimsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

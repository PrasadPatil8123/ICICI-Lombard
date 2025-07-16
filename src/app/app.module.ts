import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PipesPipe } from './shared/pipes/pipes.pipe';
import { DirectivesDirective } from './shared/directives/directives.directive';
import { HeaderComponent } from './common/header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    PipesPipe,
    DirectivesDirective,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

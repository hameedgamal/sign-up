import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FieldValidationMessageComponent, SignUpFormComponent, NotificationComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    FieldValidationMessageComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

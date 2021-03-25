import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FieldValidationMessageComponent } from './components/field-validation-message/field-validation-message.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    FieldValidationMessageComponent
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

import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { finalize, take } from 'rxjs/operators';

import { UserService } from 'src/app/services/user.service';
import {
  crossFormPasswordValidation,
  RequestState,
  ResponseState,
  validationMessage,
  validEmailPattern,
  validNamePatter,
  validPasswordPattern,
} from '../../shared';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {

  constructor(private userService: UserService) { }

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(validNamePatter)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(validNamePatter)]),
    email: new FormControl('', [Validators.required, Validators.pattern(validEmailPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(validPasswordPattern)]),
  }, { validators: crossFormPasswordValidation });

  private clearNotificationTimeoutSec = 10;
  private isFormSubmitted = false;
  requestState: RequestState = 'blank';
  responseState: ResponseState = 'blank';


  onSubmit(): void {
    // Mark form dirty only for the first time submit button is clicked
    if (!this.isFormSubmitted && !this.signUpForm.dirty) {
      this.signUpForm.markAsDirty();
    }
    this.isFormSubmitted = true;

    if (this.signUpForm.valid) {
      this.requestState = 'processing';
      this.responseState = 'blank';

      this.userService
        .signUp(this.signUpForm.value)
        .pipe(
          take(1),
          finalize(() => this.requestState = 'done')
        )
        .subscribe({
          error: this.errorHandler.bind(this),
          next: this.successHandler.bind(this),
        });
    }
  }

  hasValidation(formControlName: string): ValidationErrors & { message: string } | null | undefined {
    if (this.isFormSubmitted && this.signUpForm.dirty) {
      const errors = this.signUpForm.get(formControlName)?.errors;
      return errors ?
        { ...errors, message: validationMessage[formControlName][Object.keys(errors)[0]] } : null;
    }
    return null;
  }

  errorHandler(err: any): void {
    this.responseState = 'failure';
    this.clearNotification();
  }

  successHandler(res: any): void {
    this.responseState = 'success';
    this.signUpForm.reset();
  }

  clearNotification(close?: boolean): void {
    if (close) {
      this.responseState = 'blank';
    } else {
      setTimeout(() => { this.responseState = 'blank'; }, this.clearNotificationTimeoutSec * 1000);
    }
  }

  createNew(): void {
    this.clearNotification(true);
    this.isFormSubmitted = false;
  }
}


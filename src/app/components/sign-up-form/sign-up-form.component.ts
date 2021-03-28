import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import {
  crossFormPasswordValidation,
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

  private isFormSubmitted = false;

  onSubmit(): void {
    // Mark form dirty only for the first time submit button is clicked
    if (!this.isFormSubmitted && !this.signUpForm.dirty) {
      this.signUpForm.markAsDirty();
    }
    this.isFormSubmitted = true;

    if (this.signUpForm.valid) {
      this.userService.signUp(this.signUpForm.value).subscribe({
        next: value => console.log(value),
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
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {

  constructor(private userService: UserService){}

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  private isFormSubmitted = false;

  onSubmit(): void {
    // Mark form dirty only for the first time submit button is clicked
    if (!this.isFormSubmitted && !this.signUpForm.dirty) {
      this.signUpForm.markAsDirty();
    }
    this.isFormSubmitted = true;

    if (this.signUpForm.valid) {
      // TODO: move to a container component
      this.userService.signUp(this.signUpForm.value).subscribe({
        next: value => console.log(value),
      });
    }
  }

  hasValidation(formControlName: string): boolean {
    return this.isFormSubmitted && this.signUpForm.dirty && !!this.signUpForm.get(formControlName)?.invalid;
  }
}

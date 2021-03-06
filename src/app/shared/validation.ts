import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validNamePatter = /^[a-zA-Z]{3,}/;

export const validEmailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validPasswordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export const crossFormPasswordValidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const firstName = control.get('firstName')?.value?.toLocaleLowerCase();
  const lastName = control.get('lastName')?.value?.toLocaleLowerCase();
  const passwordField = control.get('password');
  const password = passwordField?.value?.toLocaleLowerCase();

  const error = password && (firstName || lastName) && (password.includes(firstName) || password.includes(lastName)) ?
    { invalidCrossFormPasswordValidation: true } : null;

  if (error) {
    passwordField?.setErrors({ crossFormPattern: { message: validationMessage.password.crossFormPattern } });
  }

  return error;
};

export const validationMessage: ValidationErrors = {
  firstName: {
    required: 'You must enter first name!',
    pattern: 'Invalid first name. should be more than 3 characters, no special characters!'
  },
  lastName: {
    required: 'You must enter last name!',
    pattern: 'Invalid last name. should be more than 3 characters, no special characters!'
  },
  email: {
    required: 'You must enter email address!',
    pattern: 'Invalid email address. Please enter valid email!'
  },
  password: {
    required: 'You must enter password!',
    pattern: 'Invalid password. Please enter valid password!',
    crossFormPattern: 'Invalid password. Please enter valid password that don\'t include the first or last name',
  }
};

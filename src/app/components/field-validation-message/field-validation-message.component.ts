import { Component, Input } from '@angular/core';

import { ValidationState } from '../../shared';
@Component({
  selector: 'app-field-validation-message',
  template: `
    <p [class]="'help is-' + state">{{ message }}</p>
  `,
})
export class FieldValidationMessageComponent {
  /**
   * Validation message as string
   */
  @Input() message = '';

  /**
   * Validation state could be 'danger' | 'info' | 'success'
   * Default value is `'danger'`
   */
  @Input() state: ValidationState = 'danger';
}

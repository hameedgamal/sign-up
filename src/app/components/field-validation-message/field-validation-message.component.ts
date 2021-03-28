import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-field-validation-message',
  template: `
    <p class="help is-danger">{{ message }}</p>
  `,
})
export class FieldValidationMessageComponent {
  /**
   * Validation message as string
   */
  @Input() message = '';
}

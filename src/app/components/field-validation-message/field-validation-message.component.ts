import { Component, Input } from '@angular/core';

type ValidationState = 'warning' | 'error' | 'info';

@Component({
  selector: 'app-field-validation-message',
  template: `
    <div [class]="'state--' + state">
      {{ message }}
    </div>
  `,
  styleUrls: ['./field-validation-message.component.scss']
})
export class FieldValidationMessageComponent {
  /**
   * Validation message as string
   */
  @Input() message = '';

  /**
   * Validation state could be 'warning' | 'error' | 'info'
   * Default value is `'error'`
   */
   @Input() state: ValidationState = 'error';
}

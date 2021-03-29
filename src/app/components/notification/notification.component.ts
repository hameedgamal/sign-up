import { Component, Input } from '@angular/core';
import { ResponseState } from 'src/app/shared';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  /**
   * Response state 'blank' | 'success' | 'failure'
   * Notification will be not visitable by default value `'blank'`
   * Default value `'blank'`
   */
  @Input() notificationState: ResponseState = 'blank';

  /**
   * on clear button click handler
   */
  @Input() clearHandler!: (close?: boolean) => void;


  onClear(close?: boolean): void {
    this.clearHandler(close);
  }
}

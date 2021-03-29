import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="column is-4 is-offset-4">
            <p class="title">Sign up</p>
            <app-sign-up-form></app-sign-up-form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AppComponent {
  title = 'Sign up';
}

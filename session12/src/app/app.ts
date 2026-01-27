import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template: `
    <h1>This is Inline HTML</h1>
    <span>This is a span element</span>
  `,
  // styleUrl: './app.css'
  styles: [`
    h1 {
      color: red;
    }
      span {
        color: blue;
      } 
  `]
})
export class App {
  protected readonly title = signal('session12');
}

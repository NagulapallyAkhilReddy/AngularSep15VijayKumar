import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accountlist } from './accountlist/accountlist';

@Component({
  selector: 'app-root',
  imports: [Accountlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bankproject');
}

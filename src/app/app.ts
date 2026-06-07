import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFooter } from './main-footer/main-footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}

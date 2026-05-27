import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { WhyMe } from './layout/why-me/why-me'
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { Comments } from './comments/comments';
import { ContactMe } from './contact-me/contact-me';
import { MainFooter } from './main-footer/main-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,WhyMe,MySkills,MyProjects,Comments,ContactMe,MainFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}

import { Component, signal } from '@angular/core';
import { Header } from '../layout/header/header';
import { NavBar } from '../nav-bar/nav-bar';
import { WhyMe } from '../layout/why-me/why-me'
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { Comments } from '../comments/comments';
import { ContactMe } from '../contact-me/contact-me';

@Component({
  selector: 'app-main-page',
  imports: [Header,NavBar,WhyMe,MySkills,MyProjects,Comments,ContactMe],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}

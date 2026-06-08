import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-privacy-policy',
  imports: [NavBar, RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}

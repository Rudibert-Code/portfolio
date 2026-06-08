import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, NavBar],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}

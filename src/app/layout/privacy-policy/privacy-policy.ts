import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavBar } from '../nav-bar/nav-bar';


@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink,NavBar],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}

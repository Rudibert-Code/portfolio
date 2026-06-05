import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  
  openLinkedIn(){
    window.open("https://www.linkedin.com/in/bj%C3%B6rn-sagmeister-358558a5/?skipRedirect=true");
  }
  openGitHub(){
    window.open("https://github.com/Rudibert-Code");
  }
  openBurgerMenu(){
    let replaceIMG = document.getElementById('mobilePhoto') as HTMLImageElement;
    replaceIMG.classList.toggle('inactive');
  }
}

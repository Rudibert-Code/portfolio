import { Component } from '@angular/core';

let burgerMenuState = false;

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
    let replaceBurgerMenu = document.getElementById('burgerMenu') as HTMLImageElement;
    if (burgerMenuState == false) {
      replaceIMG.style.display = "none";
      replaceBurgerMenu.style.display = "flex"; 
      burgerMenuState = true;
    } else{
      replaceIMG.style.display = "flex";
      replaceBurgerMenu.style.display = "none";
      burgerMenuState = false;
    }
  }
}

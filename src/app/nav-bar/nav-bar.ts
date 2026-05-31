import { Component } from '@angular/core';

interface Language{
  name:string,
  class:string,
  selected:boolean
}

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
    languages:Language[]=[
    {
      name:'DE',
      class:'__base',
      selected:false
    },
    {
      name:'EN',
      class:'__base',
      selected:false
    },
  ]

  selected(language:Language){
    if (language.selected==true) {
      language.class = '__base';
      language.selected = false;
    } else{
      language.class = '__white';
      language.selected = true;
    }
  }
}

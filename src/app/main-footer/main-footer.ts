import { Component } from '@angular/core';

interface Links{
  class:string,
  link?:string,
  selected:boolean
}

@Component({
  selector: 'app-main-footer',
  imports: [],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.scss',
})
export class MainFooter {
  link:Links[]=[
    {
      class:'__email',
      selected: false
    },
    {
      class:'__github',
      link:'https://github.com/Rudibert-Code',
      selected: false
    },
    {
      class:'__linkedin',
      link:'https://www.linkedin.com/in/bj%C3%B6rn-sagmeister-358558a5/?skipRedirect=true',
      selected: false
    },
  ]

  open(link:Links){
    window.open(link.link);
  }
}

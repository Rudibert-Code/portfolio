import { Component } from '@angular/core';

interface Links{
  class:string,
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
      selected: false
    },
    {
      class:'__linkedin',
      selected: false
    },
  ]
}

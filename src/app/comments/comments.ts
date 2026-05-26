import { Component } from '@angular/core';

interface Evaluation {
  name:string,
  project:string,
  comment:string,
  link:string
} 

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments {
  evaluation:Evaluation [] = [
    {
      name:'Myself',
      project:'Pokedex',
      comment:'"I was a joy to work with. 10/10 would do it again."',
      link:'google.de'
    },
    {
      name:'Myself',
      project:'Jump N Run',
      comment:'"So much work"',
      link:'google.de'
    },
    {
      name:'Myself',
      project:'Portfolio',
      comment:'"WIP. Tell you later."',
      link:'google.de'
    },
  ]
}

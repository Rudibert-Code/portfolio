import { Component } from '@angular/core';

interface Evaluation {
  name:string,
  project?:string,
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
      name:'Felix Winkler',
      comment:'"Björn is my daily dedicated study partner. His approach might be a bit unconventional, but he is exceptionally skilled and an absolute asset to any Team."',
      link:'https://www.linkedin.com/in/felix-winkler-38947a365/'
    },
    {
      name:'Felix Winkler 2',
      comment:'"Björn is my daily dedicated study partner. His approach might be a bit unconventional, but he is exceptionally skilled and an absolute asset to any Team."',
      link:'https://www.linkedin.com/in/felix-winkler-38947a365/'
    },
    {
      name:'Felix Winkler 3',
      comment:'"Björn is my daily dedicated study partner. His approach might be a bit unconventional, but he is exceptionally skilled and an absolute asset to any Team."',
      link:'https://www.linkedin.com/in/felix-winkler-38947a365/'
    },
  ]
}

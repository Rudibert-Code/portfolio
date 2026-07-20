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
      name:'Waldemar Chorow',
      comment:'"Björn ist ein echter Gewinn für jedes Entwicklerteam! Wir haben zusammen die Rezepte-Plattform Kochwelt entwickelt, und Björn hat von Anfang an dafür gesorgt, dass der Teamgeist an erster Stelle steht. Durch seine offene, kommunikative und enthusiastische Art hat er eine tolle Arbeitsatmosphäre geschaffen und das Projekt fachlich wie menschlich extrem bereichert. Er hatte immer das klare Ziel vor Augen, die Aufgaben strukturiert und mit einem sehr guten Ergebnis abzuschließen. Dabei war er ausnahmslos freundlich und stand jedem immer hilfsbereit zur Seite. Die Zusammenarbeit mit ihm hat großen Spaß gemacht. Eine klare Empfehlung, jederzeit wieder gerne"',
      link:'https://www.linkedin.com/in/waldemar-chorow-11460a31b/?skipRedirect=true'
    },
  ]
}

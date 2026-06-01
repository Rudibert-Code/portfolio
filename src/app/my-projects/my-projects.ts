import { Component } from '@angular/core';

interface Projects {
  title:string,
  selected:boolean,
  about:string,
  organisation?:string,
  experiences?:string,
}
interface Technologies {
  icon1:string,
  icon2?:string,
  icon3?:string,
}

// Project deatils in einfachem array speichern; diese über interface deffinierte ID oä. abfragen -> siehe: footer quicklinks

  let myProjects = [
    {
      title:'1. Jump N Run',
      selected:true,
      about:'Project description...'
    },
    {
      title:'2. Pokedex',
      selected:false,
      about:'Project description...',
      organisation:'Workflow details...',
      experiences:'Experiecnes...',
    },
  ]



@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})
export class MyProjects {
  projects:Projects[]=[
    {
      title:'1. Jump N Run',
      selected:true,
      about:'Project description...'
    },
    {
      title:'2. Pokedex',
      selected:false,
      about:'Project description...',
      organisation:'Workflow details...',
      experiences:'Experiecnes...',
    },
  ]
  technologies:Technologies[]=[
    {
      icon1: '/assets/icons/Icons_JavaScript.png',
      icon2: '/assets/icons/Icons_HTML.png',
      icon3: '/assets/icons/Icons_CSS.png',
    },
  ]

  liveTest(){
    window.open("https://bjoernsagmeister.developerakademie.net/jump-n-run");
  }
  gitHub(){
    window.open("https://github.com/Rudibert-Code/jump-n-run.git");
    
  }
}

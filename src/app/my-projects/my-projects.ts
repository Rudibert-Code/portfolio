import { Component } from '@angular/core';

interface Projects {
  title:string,
  projectID:number
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
      about:'A 2D platformer. No game engines used during this projects.',
      organisation:'',
      experiences:'I learned a lot.',
      tech_1:'/assets/icons/Icons_JavaScript.png',
      tech_2:'/assets/icons/Icons_HTML.png',
      tech_3:'/assets/icons/Icons_CSS.png',
      img:'/assets/projetcs/SpaceBlast.png'
    },
    {
      title:'2. Pokédex',
      selected:false,
      about:'A collection of the first 151 Pokémon, with optional detail viewer and search option.',
      organisation:'',
      experiences:'There are SO MANY pokémon!',
      tech_1:'/assets/icons/Icons_JavaScript.png',
      tech_2:'/assets/icons/Icons_HTML.png',
      tech_3:'/assets/icons/Icons_CSS.png',
      img:'/assets/projetcs/pokemon.jpg'
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
      projectID:1,
    },
    {
      title:'2. Pokedex',
      projectID:2,
    },
      {
      title:'3. WIP',
      projectID:3,
    },
  ]

  liveTest(){
    window.open("https://bjoernsagmeister.developerakademie.net/jump-n-run");
  }
  gitHub(){
    window.open("https://github.com/Rudibert-Code/jump-n-run.git");
    
  }
}

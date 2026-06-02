import { Component } from '@angular/core';

interface Projects {
  projectID:string,
  title:string,
  selected:boolean,
  about:string,
  organisation?:string,
  experiences?:string,
  tech_1:string,
  tech_2?:string,
  tech_3?:string,
  img:string
}

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})

export class MyProjects {

  projects:Projects [] = [
    {
      projectID:'1',
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
      projectID:'2',
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

  showDetails(X:Projects){
    let screenShot = document.getElementById('project_screenshot') as HTMLImageElement;
    screenShot.src = X.img;
    document.getElementById(X.projectID)?.classList.toggle('project-selected');
  }

  liveTest(){
    window.open("https://bjoernsagmeister.developerakademie.net/jump-n-run");
  }
  gitHub(){
    window.open("https://github.com/Rudibert-Code/jump-n-run.git");
    
  }
}
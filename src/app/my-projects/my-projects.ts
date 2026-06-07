import { Component } from '@angular/core';

interface Projects {
  projectID:string,
  bonusclass?:string,
  title:string,
  duration:string,
  selected:boolean,
  about:string,
  organisation:string,
  experiences:string,
  tech_1:string,
  tech_2?:string,
  tech_3?:string,
  img:string,
  livetest:string,
  github:string,
}

let projectLinkLiveL:string = "";
let projectLinkGitHub:string = "";

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})

export class MyProjects {

  projectDescription:string = "A 2D platformer. No game engines used during this projects.";
  projectProcess:string = "Base function first.";
  projectExperience:string= "I learned a lot.";

  projectDuration:string = "2 weeks";

  projects:Projects [] = [
    {
      projectID:'0',
      bonusclass:'project-selected',
      title:'1. Jump N Run',
      duration:'2 weeks',
      selected:true,
      about:'A 2D platformer. No game engines used during this projects.',
      organisation:'Base function first',
      experiences:'I learned a lot.',
      tech_1:'/assets/icons/Icons_JavaScript.png',
      tech_2:'/assets/icons/Icons_HTML.png',
      tech_3:'/assets/icons/Icons_CSS.png',
      img:'/assets/projetcs/SpaceBlast.png',
      livetest:'https://bjoernsagmeister.developerakademie.net/jump-n-run',
      github:'https://github.com/Rudibert-Code/jump-n-run.git',
    },
    {
      projectID:'1',
      title:'2. Pokédex',
      duration:'3 weeks',
      selected:false,
      about:'A collection of the first 151 Pokémon, with optional detail viewer and search option.',
      organisation:'Worked step by step',
      experiences:'There are SO MANY pokémon!',
      tech_1:'/assets/icons/Icons_JavaScript.png',
      tech_2:'/assets/icons/Icons_HTML.png',
      tech_3:'/assets/icons/Icons_CSS.png',
      img:'/assets/projetcs/pokemon.jpg',
      livetest:'https://bjoernsagmeister.developerakademie.net/modul8_pokedex',
      github:'https://github.com/Rudibert-Code/pokedex.git',
    },
  ]

  selectProject(project:Projects){
    let screenShot = document.getElementById('project_screenshot') as HTMLImageElement;
    screenShot.src = project.img;
    this.projectDescription = project.about;
    this.projectProcess = project.organisation;
    this.projectExperience = project.experiences;
    this.projectDuration = project.duration;
    projectLinkLiveL = project.livetest;
    projectLinkGitHub = project.github;
    this.resetTitleSelection();
    document.getElementById(String(project.projectID))?.classList.add('project-selected');
  }

  resetTitleSelection(){
    let titleID:string;
    for (let index = 0; index < this.projects.length; index++) {
      titleID = String(index);
      document.getElementById(titleID)?.classList.remove('project-selected');
    }
  }

  liveTest(){
    window.open(projectLinkLiveL);
  }
  gitHub(){
    window.open(projectLinkGitHub);
    
  }
}
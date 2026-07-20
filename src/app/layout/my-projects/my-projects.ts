import { Component } from '@angular/core';

interface Projects {
  projectID:string,
  bonusclass?:string,
  title:string,
  mobiletitle:string,
  duration:string,
  selected:boolean,
  about:string,
  organisation:string,
  experiences:string,
  techused:string[],
  mobiletech:string,
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

  projectTech:string = "Photoshop, Spine 2D, JavaScript, TML, CSS";
  projectDuration:string = "2 weeks";

  projects:Projects [] = [
    {
      projectID:'0',
      bonusclass:'project-selected',
      title:'1. Jump N Run',
      mobiletitle:'1. Project',
      duration:'2 weeks',
      selected:true,
      about:'A 2D platformer. No game engines used during this projects.',
      organisation:'Base function first',
      experiences:'I learned a lot.',
      techused:[
        'assets/icons/Icons_JavaScript.png',
        'assets/icons/Icons_HTML.png',
        'assets/icons/Icons_CSS.png',
      ],
      mobiletech:'Photoshop, Spine 2D, JavaScript, TML, CSS',
      img:'assets/projetcs/SpaceBlast.png',
      livetest:'https://bjoernsagmeister.developerakademie.net/jump-n-run',
      github:'https://github.com/Rudibert-Code/jump-n-run.git',
    },
    {
      projectID:'1',
      title:'2. Pokédex',
      mobiletitle:'2. Project',
      duration:'3 weeks',
      selected:false,
      about:'A collection of the first 151 Pokémon, with optional detail viewer and search option.',
      organisation:'Worked step by step',
      experiences:'There are SO MANY pokémon!',
      techused:[
        'assets/icons/Icons_JavaScript.png',
        'assets/icons/Icons_HTML.png',
        'assets/icons/Icons_CSS.png',
      ],
      mobiletech:'JavaScript, HTML, CSS',
      img:'assets/projetcs/pokemon.jpg',
      livetest:'https://bjoernsagmeister.developerakademie.net/modul8_pokedex',
      github:'https://github.com/Rudibert-Code/pokedex.git',
    },
    {
      projectID:'2',
      title:'3. Join',
      mobiletitle:'3. Join',
      duration:'5 weeks',
      selected:false,
      about:'A time / task management application. Team project.',
      organisation:'Daily team meetings using Trello for organisation.',
      experiences:'yes',
      techused:[
        'assets/icons/Icons_Git.png',
        'assets/icons/Icons_Angular.png',
        'assets/icons/Icons_TypeScript.png',
        'assets/icons/Icons_HTML.png',
        'assets/icons/Icons_CSS.png',
      ],
      mobiletech:'TypeScript, Angular, HTML, CSS',
      img:'assets/projetcs/pokemon.jpg',
      livetest:'https://bjoernsagmeister.developerakademie.net/modul8_pokedex',
      github:'https://github.com/Rudibert-Code/join',
    },
  ]

  selectProject(project:Projects){
    let screenShot = document.getElementById('project_screenshot') as HTMLImageElement;
    let techList = document.getElementById('tech-list') as HTMLDivElement;
    techList.innerHTML = "";
    screenShot.src = project.img;
    this.projectDescription = project.about;
    this.projectProcess = project.organisation;
    this.projectExperience = project.experiences;
    this.projectTech = project.mobiletech;
    this.projectDuration = project.duration;
    projectLinkLiveL = project.livetest;
    projectLinkGitHub = project.github;
    this.resetTitleSelection();
    document.getElementById(String(project.projectID))?.classList.add('project-selected');

    for (let index = 0; index < project.techused.length; index++) {
      techList.innerHTML += `<img class="project-icon" src="${project.techused[index]}">`
    }
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
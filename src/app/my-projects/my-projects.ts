import { Component } from '@angular/core';

interface Projects {
  title:string,
  selected:boolean,
  about:string,
  organisation?:string,
  experiences?:string,
}

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
}

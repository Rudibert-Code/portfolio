import { Component } from '@angular/core';

interface Skill {
  img:string,
  name:string,
}

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
  skills:Skill[]=[
    {
      img:'/public/assets/icons/Icons_Angular.png',
      name:'Angular',
    },
    {
      img:'/public/assets/icons/Icons_TypeScript.png',
      name:'TypeScript',
    },
    {
      img:'/public/assets/icons/Icons_JavaScript.png',
      name:'JavaScript',
    },
    {
      img:'/public/assets/icons/Icons_HTML.png',
      name:'HTML',
    },
    {
      img:'/public/assets/icons/Icons_CSS.png',
      name:'CSS',
    },
    {
      img:'/public/assets/icons/Icons_Git.png',
      name:'Git',
    },
  ]
}

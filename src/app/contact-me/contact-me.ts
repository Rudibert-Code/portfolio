import { Component } from '@angular/core';

let checkbox:string = '/assets/checkbox/checkbox-default.png';

interface Contacts{
  icon:string,
  info:string | number,
  highlight:boolean
}



@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {

  btnCondition:string = '/assets/checkbox/checkbox-default.png';

  contacts:Contacts[]=[
    {
      icon:'/assets/icons/Icons_email.png',
      info:'E-Mail: onoofelo@gmail.com',
      highlight:false
    },
    {
      icon:'/assets/icons/Icons_phone.png',
      info:'Tel: 01707821309',
      highlight:false
    },
  ]

  checkBox(){
    this.btnCondition = '/assets/checkbox/checkbox-checked.png';
  }
}

import { Component } from '@angular/core';

let checkbox:string = '/assets/checkbox/checkbox-default.png';

interface Contacts{
  icon:string,
  info:string | number,
  highlight:boolean
}

let nameChecked:boolean = false;
let emailChecked:boolean = false;
let messageChecked:boolean = false;
let boxChecked:boolean = false;

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
    if (boxChecked == false) {
      this.btnCondition = '/assets/checkbox/checkbox-checked.png';
      boxChecked = true;
    } else{
      this.btnCondition = '/assets/checkbox/checkbox-default.png';
      boxChecked = false;
    }
  }

  checkInputValue(id:string){
  let section = document.getElementById(id) as HTMLInputElement;

  if (id == 'contactname' && section.value.length >= 4 && nameChecked == false) {
    document.getElementById('name')?.classList.remove('hide');
    document.getElementById('contactname')?.classList.remove('error');
    nameChecked = true;
  } else if(id == 'contactname' && section.value.length <= 3 && nameChecked == true){
    document.getElementById('name')?.classList.add('hide');
    nameChecked = false;
  }
  if (id == 'contactemail' && section.value.length >= 4 && emailChecked == false) {
    document.getElementById('email')?.classList.remove('hide');
    document.getElementById('contactemail')?.classList.remove('error');
    emailChecked = true;
  } else if(id == 'contactemail' && section.value.length <= 3 && emailChecked == true){
    document.getElementById('email')?.classList.add('hide');
    emailChecked = false;
  }
  if (id == 'contactmessage' && section.value.length >= 4 && messageChecked == false) {
    document.getElementById('message')?.classList.remove('hide');
    document.getElementById('contactmessage')?.classList.remove('error');
    messageChecked = true;
  } else if(id == 'contactmessage' && section.value.length <= 3 && messageChecked == true){
    document.getElementById('message')?.classList.add('hide');
    messageChecked = false;
  }

  if (nameChecked == true && emailChecked == true && messageChecked == true) {
    document.getElementById('btn-send')?.classList.remove('button-inactive');
    document.getElementById('btn-send')?.classList.add('button-active');
  } else{
    document.getElementById('btn-send')?.classList.remove('button-active');
    document.getElementById('btn-send')?.classList.add('button-inactive');
  }
 }

  sendMessage(){
    if (nameChecked == true && emailChecked == true && messageChecked == true && boxChecked == true) {
      console.log("Email gesendet");
    }
    if(nameChecked == false){
      document.getElementById('contactname')?.classList.add('error');
    }
    if(emailChecked == false){
      document.getElementById('contactemail')?.classList.add('error');
    }
    if(messageChecked == false){
      document.getElementById('contactmessage')?.classList.add('error');
    }
    if(boxChecked == false){
      document.getElementById('contactCheckboxError')?.classList.remove('contact-checkbox');
      this.btnCondition = '/assets/checkbox/checkbox-error.png';
    }
  }
}


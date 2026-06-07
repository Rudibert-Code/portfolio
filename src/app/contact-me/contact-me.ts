import { Component } from '@angular/core';

let checkbox:string = '/assets/checkbox/checkbox-default.png';

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
//contactInit(){
//  let screenWidth = screen.width;
//  let inputName = document.getElementById('contactname') as HTMLInputElement;
//  let inputEMail = document.getElementById('contactemail') as HTMLInputElement;
//  let inputMessage = document.getElementById('contactmessage') as HTMLInputElement;
//  if (screenWidth <= 1439) {
//    console.log(screenWidth);
//    inputName.value = 'Your Name';
//    inputEMail.value = 'Your EMail';
//    inputMessage.value = 'Your Message';
//  }
//}

  btnCondition:string = '/assets/checkbox/checkbox-default.png';

  checkBox(){
    if (boxChecked == false) {
      this.btnCondition = '/assets/checkbox/checkbox-checked.png';
      boxChecked = true;
    } else{
      this.btnCondition = '/assets/checkbox/checkbox-default.png';
      boxChecked = false;
    }
    this.toggleButton();
  }

  checkInputValue(id:string){
  let section = document.getElementById(id) as HTMLInputElement;

  if (id == 'contactname' && section.value.length >= 4 && nameChecked == false) {
    document.getElementById('name')?.classList.remove('hide');
    document.getElementById('contactname')?.classList.remove('error');
    document.getElementById('nameValue')?.classList.remove('error');
    let changeName = document.getElementById('nameValue') as HTMLInputElement;
    changeName.innerHTML = "Your Name";
    nameChecked = true;
  } else if(id == 'contactname' && section.value.length <= 3 && nameChecked == true){
    document.getElementById('name')?.classList.add('hide');
    nameChecked = false;
  }
  if (id == 'contactemail' && section.value.length >= 4 && emailChecked == false) {
    document.getElementById('email')?.classList.remove('hide');
    document.getElementById('contactemail')?.classList.remove('error');
    document.getElementById('emailValue')?.classList.remove('error');
    let changeName = document.getElementById('emailValue') as HTMLInputElement;
    changeName.innerHTML = "Your Email";
    emailChecked = true;
  } else if(id == 'contactemail' && section.value.length <= 3 && emailChecked == true){
    document.getElementById('email')?.classList.add('hide');
    emailChecked = false;
  }
  if (id == 'contactmessage' && section.value.length >= 4 && messageChecked == false) {
    document.getElementById('message')?.classList.remove('hide');
    document.getElementById('contactmessage')?.classList.remove('error');
    document.getElementById('messageValue')?.classList.remove('error');
    let changeName = document.getElementById('messageValue') as HTMLInputElement;
    changeName.innerHTML = "Your Message";
    messageChecked = true;
  } else if(id == 'contactmessage' && section.value.length <= 3 && messageChecked == true){
    document.getElementById('message')?.classList.add('hide');
    messageChecked = false;
  }
  this.toggleButton();
 }

  sendMessage(){
    if (nameChecked == true && emailChecked == true && messageChecked == true && boxChecked == true) {
      console.log("Email gesendet");
    }
    if(nameChecked == false){
      document.getElementById('contactname')?.classList.add('error');
      document.getElementById('nameValue')?.classList.add('error');
      let changeName = document.getElementById('nameValue') as HTMLInputElement;
      changeName.innerHTML = "Your name is required";
    }
    if(emailChecked == false){
      document.getElementById('contactemail')?.classList.add('error');
      document.getElementById('emailValue')?.classList.add('error');
      let changeEMail = document.getElementById('emailValue') as HTMLInputElement;
      changeEMail.innerHTML = "Your email is required";
    }
    if(messageChecked == false){
      document.getElementById('contactmessage')?.classList.add('error');
      document.getElementById('messageValue')?.classList.add('error');
      let changeMessage = document.getElementById('messageValue') as HTMLInputElement;
      changeMessage.innerHTML = "Your message is required";
    }
    if(boxChecked == false){
      document.getElementById('contactCheckboxError')?.classList.remove('contact-checkbox');
      this.btnCondition = '/assets/checkbox/checkbox-error.png';
    }
  }

  toggleButton(){
    if (nameChecked == true && emailChecked == true && messageChecked == true && boxChecked == true) {
      document.getElementById('btn-send')?.classList.remove('button-inactive');
      document.getElementById('btn-send')?.classList.add('button-active');
    } else{
      document.getElementById('btn-send')?.classList.remove('button-active');
      document.getElementById('btn-send')?.classList.add('button-inactive');
    }
  }
}


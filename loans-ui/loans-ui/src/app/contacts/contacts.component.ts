import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  fName : any;
  lName : any;
  emailID : any;
  message : any;
  success : boolean = false;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  sendEmail(formData : NgForm){
    const emailData = {
      'fName' : formData.value.fName,
      'lName': formData.value.lName,
      'emailID' : formData.value.emailID,
      'message': formData.value.message
    };
        
    this.contactService.sendMail(emailData).subscribe({
      next: (v) => {
        console.log("SUCCESS!!!" + v);
       
      },
      error: (e) => console.error(e)
    });
    this.success = true;
  }

}

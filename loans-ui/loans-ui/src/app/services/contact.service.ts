import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public sendMail(emailData: any){
    return this.httpClient.post<any>(environment.CONTACT.BASE_URL+environment.CONTACT.SEND_MAIL, emailData);
  }
}

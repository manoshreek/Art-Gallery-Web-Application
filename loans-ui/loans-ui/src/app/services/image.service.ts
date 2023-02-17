import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  public getImages(){
    return this.httpClient.get('http://localhost:3000/images/');
  }

  public uploadfile(data: FormData) {
    
    return this.httpClient.post<any>('http://localhost:3000/images/uploadImage', data);
  }
}

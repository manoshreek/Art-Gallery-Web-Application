import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { map } from 'jquery';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-art-works',
  templateUrl: './add-art-works.component.html',
  styleUrls: ['./add-art-works.component.scss']
})

export class AddArtWorksComponent implements OnInit {

  name : String = '';
  description : String = '';
  image!: File;
  isUploadDone : boolean = false;
  selectedFile : any = {
    'pending' : '',
    'status' : ''
  }

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.image = event.target.files[0]
    console.log("Image File :" + this.image.name);
  }

  onSubmit(formData : NgForm){
    
    var data: FormData = new FormData();
    data.append('name', formData.value.name);
    data.append('description', formData.value.description);
    data.append('image', this.image, this.image.name);

    if(this.image){
      this.selectedFile.pending = true;
      this.imageService.uploadfile(data).subscribe(data => {
        setTimeout(() => {
          this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
        }, 2000);
        
      }, error => {
        console.log(error);
      });
      
    }
    
    formData.resetForm();

  }

}

import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-view-art-works',
 
  templateUrl: './view-art-works.component.html',
  styleUrls: ['./view-art-works.component.css']
})
export class ViewArtWorksComponent implements OnInit {

  items: any;
  formatedImages : any;

  constructor(private imageService: ImageService) { }
  
  ngOnInit(): void {
    window.onload = () => {
      this.getImage();
    }
  }

  async getImage(){
    const subscriberResponse$ = this.imageService.getImages();
    const imgResult = await lastValueFrom(subscriberResponse$);
      
    this.items = imgResult;
    var dispImage = document.getElementById("showImages");
     
    for(var i =0;i<this.items.length;i++) {
            
      const imageSrc = "data:image/png;base64," + this.items[i].src;
      const formattedImage = document.createElement("img");
      formattedImage.setAttribute('src',  imageSrc);
      formattedImage.setAttribute('alt', 'nature');
      formattedImage.setAttribute('height', '500px');
      formattedImage.setAttribute('width', 'auto');
      formattedImage.className += "image img-responsive rounded mb-4 p-3";
      formattedImage.style.opacity = "1";
      formattedImage.style.transition = ".5s ease";
      formattedImage.style.backfaceVisibility = "hidden";
      formattedImage.addEventListener("focus", () => {
        formattedImage.style.border = "red"
      });
      formattedImage.addEventListener("click", () => {
        window.alert("Clicked!");
        
      });
        
     dispImage?.appendChild(formattedImage);
    }
  }
  getImages(){
    console.log(this.items);
    console.log("INSIDE ONCLICK");
    var dispImage = document.getElementById("showImages");
   
    for(var i =0;i<this.items.length;i++) {
      console.log("PROCESSING...")
      //var rowDiv = document.createElement("div");
      //rowDiv.className = "row";

      //var colDiv = document.createElement("div");
      //colDiv.className = "col-md-6";
      //this.items[i].src = "data:image/png;base64," + this.items[i].src;
      const imageSrc = "data:image/png;base64," + this.items[i].src;
      const formattedImage = document.createElement("img");
      formattedImage.setAttribute('src',  imageSrc);
      formattedImage.setAttribute('alt', 'nature');
      formattedImage.setAttribute('height', '400px');
      formattedImage.setAttribute('width', '400px');
      formattedImage.className += "img-fluid";

      var hoverDiv = document.createElement('div');
      hoverDiv.className += "container";
      

      /*var linkElement = document.createElement("a");
      linkElement.className = "info";
      linkElement.href = "#";
      linkElement.innerHTML = "The Art";*/

      //var overlayDiv = document.createElement("div");
      //overlayDiv.className = "overlay";

      //overlayDiv.appendChild(linkElement);
      

      

      hoverDiv.appendChild(formattedImage);
      //hoverDiv.appendChild(overlayDiv);
      
      //colDiv.appendChild(hoverDiv);
      //rowDiv.appendChild(colDiv);

      dispImage?.appendChild(hoverDiv);
     // return this.items[i];
    } 
  }

}



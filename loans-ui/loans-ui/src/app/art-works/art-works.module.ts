import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewArtWorksComponent } from './view-art-works/view-art-works.component';
import { AddArtWorksComponent } from './add-art-works/add-art-works.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewArtWorksComponent,
    AddArtWorksComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ArtWorksModule { }

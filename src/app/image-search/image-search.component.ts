import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';
import { Search } from '../Classes/Search';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css'],
  providers : [ImageServiceService],
})
export class ImageSearchComponent implements OnInit {
  searchQuery: any;

  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  PreviousSearches : Search[] = [];
  today: number = Date.now();

  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    const search = {SearchTerm: this.searchQuery,Service:'ImageServiceService',Time:this.today.toString(),NumofResults:this.images.length}
    this.PreviousSearches.push(search);
  }
  ClearSearches()
  {
this.PreviousSearches = [];
  }
  SearchThis(index:number)
  {
     let i =this.PreviousSearches[index].SearchTerm;
     this.searchImages(i);
  }
  handleError(error){
    console.log(error);
  }

  constructor(private _imageService : ImageServiceService) { }

  searchImages(query: string){

    this.searching = true;
    this.searchQuery = query;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data)
      ,
      error => this.handleError(error),
      () => this.searching = false
    )
    
  }

  ngOnInit() {
  }

}

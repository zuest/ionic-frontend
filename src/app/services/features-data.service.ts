import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesDataService {

 private slides = [{
      nome: 'mercedesPromo'
    },
    {
      nome: 'LomoPromo'
    }
    ,
    {
      nome: 'BuggatiPromo'
    }
  ];

  public getSlides(){
    return this.slides;
  }

  constructor() { }
}

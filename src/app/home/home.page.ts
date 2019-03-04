import { Component } from '@angular/core';
import {FeaturesDataService} from '../services/features-data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public slides : any[] = [];

  constructor(public featuresServices: FeaturesDataService ) {
   this.slides = featuresServices.getSlides();
  }

public slideOpts = {
  slidesPerView: 1.2,
  spaceBetween: 10,
};

}

import { Component, OnInit } from '@angular/core';
import {FeaturesDataService} from '../../services/features-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public slides: any[] = [];
  public slideOpts = {
    slidesPerView: 2.1,
    spaceBetween: 0,
  };
  constructor(public featuresServices: FeaturesDataService ) {
   this.slides = featuresServices.getSlides();
  }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import {FeaturesDataService} from '../../services/features-data.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {

  public slides : any[] = [];

  constructor(public featuresServices: FeaturesDataService ) {
   this.slides = featuresServices.getSlides();
  }
  ngOnInit() {}

 public featuresOpts = {
  slidesPerView: 2.2,
  spaceBetween: 0,
};
}

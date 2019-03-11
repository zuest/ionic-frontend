import { Component, OnInit } from '@angular/core';
import {FeaturesDataService} from '../../services/features-data.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {

  public slides : any[] = [];

  constructor(public featuresServices: FeaturesDataService ) {
   this.slides = featuresServices.getSlides();
  }

  ngOnInit() {}

public slideOpts = {
  slidesPerView: 1.2,
  spaceBetween: 10,
};
}

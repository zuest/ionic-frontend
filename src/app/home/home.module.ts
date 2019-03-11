import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {FeaturedComponent} from '../components/featured/featured.component'
import {PromotionComponent} from '../components/promotion/promotion.component'
import {ServicesComponent} from '../components/services/services.component'
import {PartsComponent} from '../components/parts/parts.component'

@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,FeaturedComponent,PromotionComponent,ServicesComponent,PartsComponent]
})
export class HomePageModule {}

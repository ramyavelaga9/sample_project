import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
// import { DISHES } from '../shared/dishes'
import {flyInOut,expand} from '../animations/app.animation';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations:[flyInOut(),expand()]
})
export class MenuComponent implements OnInit {

    dishes:Dish[]; 
    errMsg:string;
    selectedDish: Dish;   

    // base url is added to get image url in template file
    constructor(private dishService:DishService,
      @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.dishService.getDishes().
      subscribe(dishes => this.dishes = dishes,
        errmess=>this.errMsg=<any>errmess);
  }
  onSelect(dish:Dish){
    this.selectedDish=dish;
  }

}

import { Component } from '@angular/core';
import { Tyre } from './tyre';
import { Tyres} from './mockData/tyreConst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';
  cars: Tyre[];

  ngOnInit() {
    this.cars = Tyres;
  }

  calcTotalParts() {
    let totalParts =0;
    this.cars.forEach(car => {
      totalParts+=car.inStock;
    });
    return totalParts;
  }

  calcTotalPrice() {
    return this.cars.reduce((prev,cur) => prev +  cur.price, 0);
  }
}

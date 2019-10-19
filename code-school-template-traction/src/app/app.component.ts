import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';
  cars=[
    {
      "id": 1,
      "name": "Super Tires",
      "description": "These tires are the very best",
      "inStock": 5,
      "price": 4.99
      },
      {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made from kryptonite",
        "inStock": 4,
        "price": 9.99
      },
      {
        "id": 3,
        "name": "Padded Seats",
        "description": "Super soft seats for a smooth ride",
        "inStock": 0,
        "price": 24.99
      }
  ];

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

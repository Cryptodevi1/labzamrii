import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab3Page {
  a: number[][] = [];
  n: number = 0;
  constructor() { }
  //products: number [] = [];
  arrayras(n:any) {
    this.a = [];
    try {
      this.n = parseInt(n);
      if(isNaN(this.n) == true)
      {
        throw new Error('Parameter is not a number!');
      }
      if(n <= 0)
      {
        throw new Error('Parameter less than zero!');
      }
      
      let i: number = 0, j:number = 0;
      this.a = Array(this.n);
      console.log("Array created");
      for(i = 0; i < this.n; ++i)
      {
        this.a[i] = Array(this.n);

        for(j = 0; j < this.n; ++j)
        {
          let aa: number = Math.floor(Math.random() * 10) + 1;
          this.a[i][j] = parseFloat(aa.toFixed(2));
        }
      }
        /*// рахуємо добуток кожного стовпчика матриці
        for (let j = 0; j < this.n; ++j) 
        {
          let product = 1;
          for (let i = 0; i < this.n; ++i)
          {
            product *= this.a[i][j];
          }
          this.products.push(product);
        }*/
    }
    catch(error)
    {
      console.log(error);
    }
  }
  getColor(b:number) {
    return b > 0 ? 'green' : 'red';
  }
}

import { Component } from '@angular/core';
import {ClickButtonComponent} from "../../components/click-button/click-button.component";
import {ClickService} from "../../services/click.service";
import {FeetCountComponent} from "../../components/feet-count/feet-count.component";
import {ShopItemComponent} from "../../components/shop-item/shop-item.component";
import {ShopItemModel} from "../../models/shopItem.model";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ClickButtonComponent,
    FeetCountComponent,
    ShopItemComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  feets$ = this.clickService.feets

  items: ShopItemModel[] = [
    {
      name: 'Weez',
      price: 15,
      quantity: 0,
      multiplier: 1,
      description: 'Gut aussehnder junger Mod. Shawn Mendes-Double.',
      image: '/assets/weez.png'
    } as ShopItemModel,
    {
      name: 'Leon',
      price: 200,
      quantity: 0,
      multiplier: 10,
      description: 'Climbed mit dir bis hoch in Silber IV.',
      image: '/assets/leon.png'
    } as ShopItemModel,
    {
      name: 'Gragas',
      price: 3000,
      quantity: 0,
      multiplier: 100,
      description: 'Niemand ist so verdammt geil.',
      image: 'https://www.mobafire.com/images/champion/square/gragas.png'
    } as ShopItemModel,
    {
      name: 'Annie',
      price: 40000,
      quantity: 0,
      multiplier: 1000,
      description: 'Sieht süß aus. Knallt aber mit einer Combo.',
      image: 'https://www.mobafire.com/images/champion/square/annie.png'
    } as ShopItemModel,
    {
      name: '240Hz Monitor',
      price: 500000,
      quantity: 0,
      multiplier: 10000,
      description: '"Ich sehe da keinen Unterschied"',
      image: 'https://m.media-amazon.com/images/I/81YXR7QNuKL.jpg'
    } as ShopItemModel,
    {
      name: 'Der Stab',
      price: 6000000,
      quantity: 0,
      multiplier: 100000,
      description: 'Der Stab, der die Welt regiert.',
      image: 'https://cdna.artstation.com/p/assets/images/images/022/992/816/large/martin-hutter-ludens-echo-fa1-1to1quare.jpg?1577634734'
    } as ShopItemModel,    {
      name: 'Ahri',
      price: 70000000,
      quantity: 0,
      multiplier: 1000000,
      description: 'Shoes to help you walk faster',
      image: 'https://www.mobafire.com/images/champion/square/ahri.png'
    } as ShopItemModel,
    {
      name: 'Simba',
      price: 100000000,
      quantity: 0,
      multiplier: 10000000,
      description: '1 falsches Wort. Perma.',
      image: 'https://www.mobafire.com/images/champion/square/yuumi.png'
    } as ShopItemModel
  ]

  constructor(private clickService: ClickService) {
    setInterval(() => {
      this.clickService.feets.next(this.clickService.feets.value + this.clickService.feetEverySecond.value);
    }, 1000);
  }
}

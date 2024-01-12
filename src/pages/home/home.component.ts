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
  won$ = this.clickService.won

  items: ShopItemModel[] = [
    {
      name: 'Weez',
      price: 15,
      quantity: 0,
      multiplier: 1,
      description: 'Gut aussehnder junger Mod. Shawn Mendes-Double.',
      image: '/assets/weez.png',
      upgrades: [
        {
          name: 'Schnelle Brille',
          description: 'Sieht noch besser aus als davor.',
          price: 500,
          factorMultiply: 1,
          factorAdd: 5,
          unlocked: false,
          image: '/assets/emotes/According_to_Plan_Emote.webp'
        },
        {
          name: 'Cup Cake',
          description: 'Gönn dem Jungen doch mal.',
          price: 50000,
          factorMultiply: 120,
          factorAdd: 600,
          unlocked: false,
          image: '/assets/emotes/2.webp'
        },
        {
          name: 'Breites Grinsen',
          description: 'Jetzt strahlt er richtig!',
          price: 5000000,
          factorMultiply: 20000,
          factorAdd: 90000,
          unlocked: false,
          image: '/assets/emotes/3.webp'
        }
      ]
    } as ShopItemModel,
    {
      name: 'Leon',
      price: 200,
      quantity: 0,
      multiplier: 10,
      description: 'Climbed mit dir bis hoch in Silber IV.',
      image: '/assets/leon.png',
      upgrades: [
        {
          name: 'KNALLHART',
          description: 'Der Typ ist einfach nur knallhart.',
          price: 10000,
          factorMultiply: 25,
          factorAdd: 150,
          unlocked: false,
          image: '/assets/emotes/4.webp'
        },
        {
          name: 'Side-eye',
          description: 'Renn lieber weg vor ihm.',
          price: 1000000,
          factorMultiply: 3000,
          factorAdd: 20000,
          unlocked: false,
          image: '/assets/emotes/5.webp'
        },
        {
          name: 'Brutale Gadse',
          description: 'Jetzt strahlt er richtig!',
          price: 10000000,
          factorMultiply: 35000,
          factorAdd: 210000,
          unlocked: false,
          image: '/assets/emotes/6.webp'
        }
      ]
    } as ShopItemModel,
    {
      name: 'Gragas',
      price: 3000,
      quantity: 0,
      multiplier: 100,
      description: 'Niemand ist so verdammt geil.',
      image: 'https://www.mobafire.com/images/champion/square/gragas.png',
      upgrades: [
        {
          name: 'Entertainment pur',
          description: 'Der Typ ist einfach nur knallhart.',
          price: 50000,
          factorMultiply: 50,
          factorAdd: 1500,
          unlocked: false,
          image: '/assets/emotes/7.webp'
        },
        {
          name: 'CUTENESS',
          description: 'Gragas ist halt 1 Süßi',
          price: 133769,
          factorMultiply: 600,
          factorAdd: 420,
          unlocked: false,
          image: '/assets/emotes/8.webp'
        },
        {
          name: 'Niceness',
          description: 'Der ist so nice wie Meli.',
          price: 10000000,
          factorMultiply: 35000,
          factorAdd: 210000,
          unlocked: false,
          image: '/assets/emotes/9.webp'
        }
      ]
    } as ShopItemModel,
    {
      name: '240Hz Monitor',
      price: 500000,
      quantity: 0,
      multiplier: 10000,
      description: '"Ich sehe da keinen Unterschied"',
      image: 'https://m.media-amazon.com/images/I/81YXR7QNuKL.jpg',
      upgrades: [
        {
          name: 'Entertainment pur',
          description: 'Der Typ ist einfach nur knallhart.',
          price: 100000,
          factorMultiply: 600,
          factorAdd: 15000,
          unlocked: false,
          image: '/assets/emotes/10.webp'
        },
        {
          name: 'Wasser marsch',
          description: 'Vielleicht sieht Meli dann einen Unterschied',
          price: 4200000,
          factorMultiply: 1000,
          factorAdd: 100000,
          unlocked: false,
          image: '/assets/emotes/11.webp'
        },
        {
          name: 'Technik-support',
          description: 'Wieso ist da so nen Riss?',
          price: 69696969,
          factorMultiply: 13000,
          factorAdd: 4200000,
          unlocked: false,
          image: '/assets/emotes/12.webp'
        }
      ]
    } as ShopItemModel,
    {
      name: 'Der Stab',
      price: 6000000,
      quantity: 0,
      multiplier: 100000,
      description: 'Der Stab, der die Welt regiert.',
      image: 'https://cdna.artstation.com/p/assets/images/images/022/992/816/large/martin-hutter-ludens-echo-fa1-1to1quare.jpg?1577634734',
      upgrades: [
        {
          name: 'GLANZ',
          description: 'Mehr Glanz immer gut.',
          price: 1000000,
          factorMultiply: 7000,
          factorAdd: 180000,
          unlocked: false,
          image: '/assets/emotes/13.webp'
        },
        {
          name: 'Aggro',
          description: 'Noch aggressiver als davor!',
          price: 10000000,
          factorMultiply: 75000,
          factorAdd: 1000000,
          unlocked: false,
          image: '/assets/emotes/14.webp'
        },
        {
          name: 'Cute Pingu',
          description: 'Keine Ahnung was nen cute Pingu mit nem Stab will?',
          price: 123456789,
          factorMultiply: 123456,
          factorAdd: 12345678,
          unlocked: false,
          image: '/assets/emotes/15.webp'
        }
      ]
    } as ShopItemModel,
    {
      name: 'Simba',
      price: 100000000,
      quantity: 0,
      multiplier: 10000000,
      description: '1 falsches Wort. Perma.',
      image: 'https://www.mobafire.com/images/champion/square/yuumi.png',
      upgrades: [
        {
          name: 'WAS?',
          description: 'OMG ES GEHT WEITER!',
          price: 1000000000,
          factorMultiply: 10000000,
          factorAdd: 1000000000,
          unlocked: false,
          image: '/assets/emotes/16.webp'
        },
        {
          name: 'WARUM?',
          description: 'Wieso noch teurer?',
          price: 1000000000000,
          factorMultiply: 10000000000,
          factorAdd: 1000000000,
          unlocked: false,
          image: '/assets/emotes/17.webp'
        },
        {
          name: 'SO TEUER!',
          description: 'Das letzte Upgrade.',
          price: 10000000000000,
          factorMultiply: 100000000000,
          factorAdd: 10000000000,
          unlocked: false,
          image: '/assets/emotes/18.webp'
        }
      ]
    } as ShopItemModel
  ]

  constructor(private clickService: ClickService) {
    setInterval(() => {
      this.clickService.feets.next(this.clickService.feets.value + this.clickService.feetEverySecond.value);
    }, 1000);
  }

  goToYuuki() {
    window.location.href = 'https://www.twitch.tv/nohyuukii';
  }
}

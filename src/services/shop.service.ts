import { Injectable } from '@angular/core';
import {ShopItemModel} from "../models/shopItem.model";
import {ClickService} from "./click.service";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private clickService: ClickService) { }

  buyItem(item: ShopItemModel) {
    this.clickService.feets.next(this.clickService.feets.value - item.price);
    this.clickService.feetEverySecond.next(this.clickService.feetEverySecond.value + item.multiplier);
  }
}

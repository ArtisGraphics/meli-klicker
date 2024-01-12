import { Injectable } from '@angular/core';
import {ShopItemModel, UpgradeModel} from "../models/shopItem.model";
import {ClickService} from "./click.service";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private clickService: ClickService) { }

  buyItem(item: ShopItemModel) {
    let feetEverySecond = 0;
    let feetClickMultiplier = 0;
    item.upgrades.filter(upgrade => upgrade.unlocked).forEach(upgrade => {
      feetEverySecond += item.multiplier * upgrade.factorMultiply;
      feetClickMultiplier += upgrade.factorAdd;
    });

    this.clickService.feets.next(this.clickService.feets.value - item.price);
    this.clickService.feetEverySecond.next(this.clickService.feetEverySecond.value + item.multiplier + feetEverySecond);
    this.clickService.feetClickMultiplier.next(this.clickService.feetClickMultiplier.value + feetClickMultiplier);
  }

  buyUpgrade(item: ShopItemModel, upgrade: UpgradeModel) {
    this.clickService.feets.next(this.clickService.feets.value - upgrade.price);
    let feetEverySecond = item.quantity * item.multiplier * upgrade.factorMultiply;
    let feetClickMultiplier = item.quantity * upgrade.factorAdd;
    this.clickService.feetEverySecond.next(this.clickService.feetEverySecond.value + feetEverySecond);
    this.clickService.feetClickMultiplier.next(this.clickService.feetClickMultiplier.value + feetClickMultiplier);
  }
}

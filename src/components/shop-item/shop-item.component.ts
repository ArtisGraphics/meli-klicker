import {Component, Input} from '@angular/core';
import {ShopItemModel, UpgradeModel} from "../../models/shopItem.model";
import {ShopService} from "../../services/shop.service";
import {ClickService} from "../../services/click.service";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
  selector: 'app-shop-item[item]',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {

  @Input() feets: number | null = 0;
  @Input() item!: ShopItemModel;

  constructor(private shopService: ShopService, private clickService: ClickService) {

  }


  buyItem(item: ShopItemModel) {
    item.quantity++;
    let audio = new Audio();
    audio.src = "../assets/buy.mp3";
    audio.volume = 0.4;
    audio.load();
    audio.play();
    this.shopService.buyItem(item);
  }

  buyUpgrade(item: ShopItemModel, upgrade: UpgradeModel) {
    if (this.feets! < upgrade.price || upgrade.unlocked) {
      return;
    }
    let audio = new Audio();
    audio.src = "../assets/buy.mp3";
    audio.volume = 0.4;
    audio.load();
    audio.play();
    upgrade.unlocked = true;
    this.shopService.buyUpgrade(item, upgrade);

    if(item.name == "SO TEUER!") {
      this.clickService.isWon()
    }
  }
}

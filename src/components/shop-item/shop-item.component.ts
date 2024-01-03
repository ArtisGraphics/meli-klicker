import {Component, Input} from '@angular/core';
import {ShopItemModel} from "../../models/shopItem.model";
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

  constructor(private shopService: ShopService) {

  }


  buyItem(item: ShopItemModel) {
    item.quantity++;
    this.shopService.buyItem(item);
  }
}

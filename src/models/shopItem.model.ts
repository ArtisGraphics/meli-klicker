export interface ShopItemModel {
  name: string;
  description: string;
  price: number;
  multiplier: number;
  quantity: number;
  image: string;
  upgrades: UpgradeModel[];
}

export interface UpgradeModel {
  name: string;
  description: string;
  price: number;
  factorMultiply: number;
  factorAdd: number;
  unlocked: boolean;
  image: string;
}

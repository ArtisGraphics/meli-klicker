import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  feetEverySecond: BehaviorSubject<number>= new BehaviorSubject<number>(0);
  feetClickMultiplier: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  feets: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  addClick() {
    this.feets.next(this.feets.getValue() + this.feetClickMultiplier.getValue());
  }
}

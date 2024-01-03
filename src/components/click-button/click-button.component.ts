import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ClickService} from "../../services/click.service";

@Component({
  selector: 'app-click-button',
  standalone: true,
  imports: [],
  templateUrl: './click-button.component.html',
  styleUrl: './click-button.component.scss'
})
export class ClickButtonComponent {

  constructor(private ClickService: ClickService) {
  }
  addClick() {
    let audio = new Audio();
    audio.src = "../assets/terraria.mp3";
    audio.load();
    audio.play();
    this.ClickService.addClick();
  }
}

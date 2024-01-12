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
  enabledClick: boolean = true;

  constructor(private ClickService: ClickService) {
  }
  addClick() {
    this.enabledClick = false;
    let audio = new Audio();
    audio.src = "../assets/pop.mp3"
    audio.volume = 0.1;
    audio.load();
    audio.play();
    this.ClickService.addClick();
    setTimeout(() => {
      this.enabledClick = true;
    }, 100)
  }
}

import { Component } from '@angular/core';
import {ClickService} from "../../services/click.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-feet-count',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './feet-count.component.html',
  styleUrl: './feet-count.component.scss'
})
export class FeetCountComponent {

  feets$ = this.clickService.feets
  feetEverySecond$ = this.clickService.feetEverySecond
  constructor(private clickService: ClickService) {
  }
}

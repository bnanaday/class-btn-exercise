import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showOrHide: boolean = true;
  count: number = 0;
  log: number[] = [];

  onClick() {
    this.showOrHide = !this.showOrHide;
    this.log.push(this.count++);
  }
}

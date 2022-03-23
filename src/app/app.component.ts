import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  isVisible: boolean = true;
  count: number = 0;
  LOG:number[] = [];

  onClick() {
    this.isVisible = !this.isVisible;
    this.LOG.push(this.count++);
  }
}
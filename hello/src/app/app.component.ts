import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  name = '';

  clickMe(): void {
    this.title = 'Ma fonction Click Me';
  }

  updateName(event: Event): void {
    let element = <HTMLInputElement> event.target;
    //console.log(element.value);
    this.name = element.value;
  }
}

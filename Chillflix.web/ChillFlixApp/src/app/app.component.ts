import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<components/modal #app-modal></app-modal><components/login (myEvent)="LoginComponent.function1()"></components/login>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChillFlixApp';
}

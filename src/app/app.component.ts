import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delete-boilerplate';
  items: number[] = [1,2,3,4,5,6]
  num = 4;
  name = "Kyle"
  mode=true;
}

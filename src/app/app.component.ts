import { Component } from '@angular/core';
import {Newspaper} from "./Interfaces/newspaper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-News';
  isOpen = false;

}

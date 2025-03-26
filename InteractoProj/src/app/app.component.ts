import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnsupportedBrowserComponent } from './not-supported/not-supported.component';

@Component({
  selector: 'app-root',
  imports: [UnsupportedBrowserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InteractoProj';
}

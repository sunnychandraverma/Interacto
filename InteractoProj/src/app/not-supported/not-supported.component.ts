import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-unsupported-browser',
  standalone:true,
  imports:[CommonModule],
  template: `
    <div class="container" [ngClass]="{ 'flicker': isFlickering }">
      <button (click)="triggerFlicker()" class="btn">
        Welcome, Click here to get started
      </button>
    </div>
  `,
  styles: [
    `
      .container {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #ff7eb3, #ff758c);
        transition: background 0.1s;
      }
      .btn {
        background: #ff4b5c;
        color: white;
        padding: 12px 24px;
        font-size: 18px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .btn:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }
      .flicker {
        animation: flicker 0.05s infinite alternate;
      }
      @keyframes flicker {
        0% { background: #000; }
        100% { background: linear-gradient(135deg, #ff7eb3, #ff758c); }
      }
    `
  ]
})
export class UnsupportedBrowserComponent {
  isFlickering = false;

  triggerFlicker() {
    this.isFlickering = true;
    setTimeout(() => {
      this.isFlickering = false;
      alert("Your PC has been dstroyed");
    }, 5000); 
    
  }
}

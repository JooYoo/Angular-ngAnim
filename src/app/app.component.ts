import { Component } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { flipInY, bounce } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
   
    trigger('FlipAnim', [

      state('goFlip', style({
        transform: 'rotateY(180deg)'
      })),

      state('goBack', style({
        transform: 'rotateY(0)'
      })),

      transition('goFlip => goBack', animate('200ms ease-out')),
      transition('goBack => goFlip', animate('400ms ease-in'))
    ]) 
  ]
})
export class AppComponent {
  
  title = 'ngAnim';

  isFlip: string = 'goBack';
 
  
  toggleFlip() {
    this.isFlip = (this.isFlip == 'goBack') ? 'goFlip' : 'goBack';
  }

}

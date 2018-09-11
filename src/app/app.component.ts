import { Component } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { flipInY, bounce } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('FlipAnim',[

      state('goFlip',style({
       transform:' rotateY(180deg)'
      })),

      state('goBack',style({
       transform: 'rotateY(0deg)'
      })),

      transition('goFlip => goBack', animate('300ms ease-out')),
      transition('goBack => goFlip', animate('400ms ease-in'))
      
      // transition('*=>*',
      // useAnimation(bounce))
    ])
  ]
})
export class AppComponent {
  
  title = 'ngAnim';
  
  isFlip:boolean =false;
  
   get stateName() {
    return this.isFlip? 'goFlip' : 'goBack'
  }

    animateMe(){
    this.isFlip = !this.isFlip
  }

}

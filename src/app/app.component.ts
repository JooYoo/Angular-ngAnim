import { Component } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { flipInY, bounce } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('popOverState',[

      state('show',style({
       transform:' rotateY(180deg)'
      })),

      state('hide',style({
       transform: 'rotateY(0)'
      })),

      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
      
      // transition('*=>*',
      // useAnimation(bounce))
    ])
  ]
})
export class AppComponent {
  title = 'ngAnim';
  
  show:boolean =false;
  
  
   get stateName() {
    return this.show? 'show' : 'hide'
  }
  

  animateMe(){
    console.log("clicked")
    this.show = !this.show
  }

}

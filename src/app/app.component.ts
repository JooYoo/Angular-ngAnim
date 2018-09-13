import { Component } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate, keyframes } from '@angular/animations';
import { flipInY, bounce } from 'ng-animate';
import * as kf from './keyframes'

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
    ]),

    trigger('cardAnimator',[
    
      transition('* => zoomOutDown', animate(1000, keyframes(kf.zoomOutDown))),

      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => zoomOutLeft', animate(1000, keyframes(kf.zoomOutLeft))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
})
export class AppComponent {
  
  title = 'ngAnim';
  isFlip: string = 'goBack';
  toggleFlip() {
    this.isFlip = (this.isFlip == 'goBack') ? 'goFlip' : 'goBack';
  }

  animationState: string
  startAnimation(state){
    console.log(state)
    if(!this.animationState){
      this.animationState = state
    }
  }
  resetAnimationState(){
    this.animationState = ''
  }

}

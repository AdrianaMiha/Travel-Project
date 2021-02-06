import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-block',
  templateUrl: './trips-block.component.html',
  styleUrls: ['./trips-block.component.scss']
})
export class TripsBlockComponent implements OnInit {
  follower: HTMLElement;
  circle: HTMLElement;
  text: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.variablesDeclaration();
  }

  variablesDeclaration() {
    this.follower = document.getElementById('follower');
    this.circle = document.getElementById('follower__circle');
    this.text = document.getElementById('follower__text');
  }

  mouseMove(): void {
    let block = document.getElementsByClassName('tripsBlock');
    let mouseX = (event) => event.clientX;
    let mouseY = (event) => event.clientY;
    let positionElement = (event) => {
      let mouse = {
        x: mouseX(event),
        y: mouseY(event)
      };

      if (block[0].clientHeight - mouse.y > 10  && mouse.x > block[0].clientWidth * 0.34 ) {
        // let mY = mouse.y - 30;
        // let mX = mouse.x - 30;
        // this.follower.style.top =  mY + 'px';
        // this.follower.style.left = mX + 'px';


        this.follower.style.top = mouse.y + 'px';
        this.follower.style.left = mouse.x + 'px';
        this.follower.style.transitionDuration = 0.5 + 's';
        this.text.style.color = 'rgba(255, 255, 255, 0.562)'
        this.text.style.transitionDelay = 0 + 's';
        // console.log(mouse.y)
        // console.log(mouse.y - 30)

        // console.log(block[0].clientHeight)
      }
      else {
        this.follower.style.top = 10 + '%';
        this.follower.style.left = 84 + '%';
        this.follower.style.transitionDuration = 1 + 's';
        this.text.style.color = 'rgba(255, 255, 255, 0)';
      }
    };

    window.onmousemove = (event) => {
      let _event = event;
      setTimeout(() => {
        positionElement(_event);
      }, 100);
    };
  };


  tripsAnimationStart(): void {
    this.circle.style.width = 45 + 'px';
    this.circle.style.height = 45 + 'px';
    this.text.style.color = 'rgba(255, 255, 255, 0)';
    this.text.style.transitionDelay = 0 + 's';
  }
  tripsAnimationEnd(): void {
    this.circle.style.width = 70 + 'px';
    this.circle.style.height = 70 + 'px';
    this.text.style.color = 'rgba(255, 255, 255, 0.562)';
    this.text.style.transitionDelay = 0.2 + 's';
  }
}

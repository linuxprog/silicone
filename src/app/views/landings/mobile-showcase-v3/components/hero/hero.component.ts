import { Component } from '@angular/core'
import { ParallaxMouseMoveDirective } from 'src/app/helpers/parralax-directive'

@Component({
  selector: 'mobile-showcase-v3-hero',
  standalone: true,
  imports: [ParallaxMouseMoveDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}

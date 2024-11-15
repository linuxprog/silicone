import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { CtaComponent } from './component/cta/cta.component'
import { ContentComponent } from './component/content/content.component'
import { BlogCardComponent } from './component/blog-card/blog-card.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-simple-feed',
  standalone: true,
  imports: [
    TopbarComponent,
    BreadcrumbComponent,
    CtaComponent,
    ContentComponent,
    BlogCardComponent,
    Footer9Component,
  ],
  templateUrl: './simple-feed.component.html',
  styles: ``,
})
export class SimpleFeedComponent {}

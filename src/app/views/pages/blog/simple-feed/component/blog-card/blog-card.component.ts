import { Component } from '@angular/core'
import { blogData } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'simple-feed-blog-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-card.component.html',
  styles: ``,
})
export class BlogCardComponent {
  feedBlogCard = blogData
}

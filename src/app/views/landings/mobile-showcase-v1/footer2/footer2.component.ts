import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { credits } from '@states/constants'
import { footer2Items, footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer2.component.html',
  styles: ``,
})
export class Footer2Component {
  itemsList = footer2Items
  socialLinks = footerSocialLinks
  creditsBy = credits
}

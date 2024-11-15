import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { credits } from '@states/constants'
import {
  aiModels,
  footer6Link,
  footerIntegrationData,
  resourseData,
} from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer6',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer6.component.html',
  styles: ``,
})
export class Footer6Component {
  socialLinks = footer6Link
  creditsBy = credits
  aiModelsData = aiModels
  resourseData = resourseData
  integrationData = footerIntegrationData
}

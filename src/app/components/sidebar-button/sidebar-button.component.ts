import { Component, TemplateRef, inject } from '@angular/core'
import { AppMenuComponent } from '@components/app-menu/app-menu.component'
import { LogoutButtonComponent } from '@components/logout-button.component'
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { currentYear } from '@states/constants'

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [LogoutButtonComponent, AppMenuComponent],
  providers: [NgbActiveOffcanvas],
  templateUrl: './sidebar-button.component.html',
  styles: ``,
})
export class SidebarButtonComponent {
  offcanvasService = inject(NgbOffcanvas)
  currentYear = currentYear
  openMenu(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }
}

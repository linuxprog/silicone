import { Component } from '@angular/core'
import { listData } from '../../data'
import { CommonModule } from '@angular/common'
import { RellaxDirective } from '@helpers/rellax-directive'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'list-view-list',
  standalone: true,
  imports: [CommonModule, RellaxDirective,RouterModule],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {
  listViewData = listData
}

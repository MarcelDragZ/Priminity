import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-member-ui-list',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-member-ui-list works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiListComponent {}

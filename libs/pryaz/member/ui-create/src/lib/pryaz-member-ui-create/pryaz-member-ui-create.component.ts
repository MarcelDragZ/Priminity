import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-member-ui-create',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-member-ui-create works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiCreateComponent {}

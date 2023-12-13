import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-member-ui-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-member-ui-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiDetailComponent {}

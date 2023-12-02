import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-teammember-ui-list',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-teammember-ui-list works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberUiListComponent {}

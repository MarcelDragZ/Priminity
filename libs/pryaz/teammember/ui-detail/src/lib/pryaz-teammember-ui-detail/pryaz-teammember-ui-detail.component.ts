import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-teammember-ui-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-teammember-ui-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberUiDetailComponent {}

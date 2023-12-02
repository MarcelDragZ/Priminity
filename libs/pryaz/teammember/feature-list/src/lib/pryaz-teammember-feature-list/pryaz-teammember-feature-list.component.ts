import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-teammember-feature-list',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-teammember-feature-list works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberFeatureListComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-teammember-feature-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-teammember-feature-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberFeatureDetailComponent {}

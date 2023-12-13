import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-member-feature-list',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-member-feature-list works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberFeatureListComponent {}

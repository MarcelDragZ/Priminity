import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-member-feature-create',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-member-feature-create works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberFeatureCreateComponent {}

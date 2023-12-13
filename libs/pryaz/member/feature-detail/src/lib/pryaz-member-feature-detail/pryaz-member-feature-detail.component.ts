import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-member-feature-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-member-feature-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberFeatureDetailComponent {}

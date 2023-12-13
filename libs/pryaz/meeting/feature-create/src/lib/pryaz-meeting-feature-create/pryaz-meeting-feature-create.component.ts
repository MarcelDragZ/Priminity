import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-meeting-feature-create',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-meeting-feature-create works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingFeatureCreateComponent {}

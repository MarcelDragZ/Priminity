import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-meeting-feature-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-meeting-feature-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingFeatureDetailComponent {}

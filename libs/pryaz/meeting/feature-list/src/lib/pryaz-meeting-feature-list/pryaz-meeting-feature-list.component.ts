import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-meeting-feature-list',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-meeting-feature-list works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingFeatureListComponent {}

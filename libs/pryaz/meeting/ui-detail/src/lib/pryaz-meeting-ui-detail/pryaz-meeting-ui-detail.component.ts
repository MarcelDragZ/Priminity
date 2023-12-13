import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-meeting-ui-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-meeting-ui-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingUiDetailComponent {}

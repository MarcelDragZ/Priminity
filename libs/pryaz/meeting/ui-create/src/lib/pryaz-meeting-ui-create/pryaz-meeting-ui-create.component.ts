import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-meeting-ui-create',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-meeting-ui-create works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingUiCreateComponent {}

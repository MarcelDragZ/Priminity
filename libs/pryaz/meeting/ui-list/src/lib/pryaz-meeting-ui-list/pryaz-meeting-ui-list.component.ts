import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-meeting-ui-list',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-meeting-ui-list works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingUiListComponent {}

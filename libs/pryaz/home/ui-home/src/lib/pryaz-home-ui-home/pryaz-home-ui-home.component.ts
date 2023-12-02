import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-home-ui-home',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pryaz-home-ui-home works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazHomeUiHomeComponent {}

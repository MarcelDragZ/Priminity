import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-shared-logo',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="absolute right-0 bottom-0 left-0 top-0 -z-10">
    <img
      class="absolute left-5 top-5 w-28 object-contain img-color"
      src="/assets/img/logo_simply_black.png"
    />
  </div>`,

  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazSharedLogoComponent {}

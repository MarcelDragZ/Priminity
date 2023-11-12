import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-registry-ui-registry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pryaz-registry-ui-registry.component.html',
  styleUrls: ['./pryaz-registry-ui-registry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazRegistryUiRegistryComponent {}

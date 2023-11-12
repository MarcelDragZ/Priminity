import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-registry-feature-registry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pryaz-registry-feature-registry.component.html',
  styleUrls: ['./pryaz-registry-feature-registry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazRegistryFeatureRegistryComponent {}

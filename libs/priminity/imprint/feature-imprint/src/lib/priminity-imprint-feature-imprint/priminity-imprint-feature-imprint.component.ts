import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-priminity-imprint-feature-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-imprint-feature-imprint.component.html',
  styleUrls: ['./priminity-imprint-feature-imprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityImprintFeatureImprintComponent {}

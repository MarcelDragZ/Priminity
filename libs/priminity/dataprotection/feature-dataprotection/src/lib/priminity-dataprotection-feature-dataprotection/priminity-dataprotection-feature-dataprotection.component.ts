import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-priminity-dataprotection-feature-dataprotection',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './priminity-dataprotection-feature-dataprotection.component.html',
  styleUrls: [
    './priminity-dataprotection-feature-dataprotection.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityDataprotectionFeatureDataprotectionComponent {}

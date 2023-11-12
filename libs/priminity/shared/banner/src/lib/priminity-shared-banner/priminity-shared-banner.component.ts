import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriminityLogosFeatureLogosComponent } from '@priminity/priminity/logos/feature-logos';

@Component({
  selector: 'priminity-priminity-shared-banner',
  standalone: true,
  imports: [CommonModule, PriminityLogosFeatureLogosComponent],
  templateUrl: './priminity-shared-banner.component.html',
  styleUrls: ['./priminity-shared-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminitySharedBannerComponent {
  @Input() bannerName!: string;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriminitySharedBannerComponent } from '@priminity/priminity/shared/banner';

@Component({
  selector: 'priminity-priminity-logos-feature-logos',
  standalone: true,
  imports: [CommonModule, PriminitySharedBannerComponent],
  templateUrl: './priminity-logos-feature-logos.component.html',
  styleUrls: ['./priminity-logos-feature-logos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityLogosFeatureLogosComponent {
  bannerName = 'Logos';

  simplyLogos = [
    'simply_red',
    'simply_orange',
    'simply_yellow',
    'simply_green',
    'simply_light-blue',
    'simply_blue',
    'simply_purple',
    'simply_pink',
  ];

  avatarLogos = [
    'avatar_red',
    'avatar_orange',
    'avatar_yellow',
    'avatar_green',
    'avatar_light-blue',
    'avatar_blue',
    'avatar_purple',
    'avatar_pink',
    'avatar_gray',
  ];

  specialLogos = [
    'simply_special1',
    'simply_special3',
    'simply_special2',
    'avatar_special1',
    'avatar_special2',

  ];
}

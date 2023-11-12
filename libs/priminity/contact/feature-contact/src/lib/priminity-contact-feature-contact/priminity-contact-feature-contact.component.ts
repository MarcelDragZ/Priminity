import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriminitySharedBannerComponent } from '@priminity/priminity/shared/banner';

@Component({
  selector: 'priminity-priminity-contact-feature-contact',
  standalone: true,
  imports: [CommonModule, PriminitySharedBannerComponent],
  templateUrl: './priminity-contact-feature-contact.component.html',
  styleUrls: ['./priminity-contact-feature-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityContactFeatureContactComponent {
  bannerName = 'Kontakt';

  contacts = [
    {
      title: 'Teamspeak',
      link: 'ts3server://priminity',
      image: 'teamspeak_icon'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/priminitygaming/',
      image: 'instagram_icon'
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/@Priminity',
      image: 'youtube_icon'
    },
    {
      title: 'Twitch',
      link: 'https://www.twitch.tv/priminity',
      image: 'twitch_icon'
    }
  ]
}

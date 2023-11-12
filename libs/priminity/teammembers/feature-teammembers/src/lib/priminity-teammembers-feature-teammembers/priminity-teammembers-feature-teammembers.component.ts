import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriminitySharedBannerComponent } from '@priminity/priminity/shared/banner';
import { PriminitySharedCardFeatureCardComponent } from '@priminity/priminity/shared/card/feature-card';
import { Teammember } from '@priminity/shared/environments/models';

@Component({
  selector: 'priminity-priminity-teammembers-feature-teammembers',
  standalone: true,
  imports: [CommonModule, PriminitySharedBannerComponent, PriminitySharedCardFeatureCardComponent],
  templateUrl: './priminity-teammembers-feature-teammembers.component.html',
  styleUrls: ['./priminity-teammembers-feature-teammembers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityTeammembersFeatureTeammembersComponent {
  teammembers: Teammember[] = [{
    name: 'Marcel',
    nickname: 'DragZ',
    email: '',
    password: '',
    position: 'Admin',
    steamlink: 'https://steamcommunity.com/profiles/76561198109280611',
    twitchlink: 'https://twitch.tv/marceldragz',
    youtubelink: '',
    instagramlink: '',
    tiktoklink: '',
  },
  {
    name: 'David',
    nickname: 'EroTec.',
    email: '',
    password: '',
    position: 'Supervisor',
    steamlink: 'https://steamcommunity.com/profiles/76561198082035975/',
    twitchlink: '',
    youtubelink: '',
    instagramlink: '',
    tiktoklink: '',
  },
  {
    name: 'Patrick',
    nickname: 'v3x',
    email: '',
    password: '',
    position: 'Supervisor',
    steamlink: 'https://steamcommunity.com/profiles/76561198888365072',
    twitchlink: '',
    youtubelink: '',
    instagramlink: '',
    tiktoklink: '',
  },
  {
    name: 'Jessi',
    nickname: 'Flauschi',
    email: '',
    password: '',
    position: 'Mod',
    steamlink: 'https://steamcommunity.com/profiles/76561198111618293',
    twitchlink: '',
    youtubelink: '',
    instagramlink: '',
    tiktoklink: '',
  },
  {
    name: 'Tami',
    nickname: 's0uls1ster',
    email: '',
    password: '',
    position: 'Mod',
    steamlink: 'https://steamcommunity.com/profiles/76561198026177799',
    twitchlink: '',
    youtubelink: '',
    instagramlink: '',
    tiktoklink: '',
  }];


  bannerName = 'Teammitglieder';

}

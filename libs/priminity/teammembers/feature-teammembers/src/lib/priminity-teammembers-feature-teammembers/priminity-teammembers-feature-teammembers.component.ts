import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriminitySharedBannerComponent } from '@priminity/priminity/shared/banner';
import { PriminitySharedCardFeatureCardComponent } from '@priminity/priminity/shared/card/feature-card';
import { TeamMemberInterface } from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-priminity-teammembers-feature-teammembers',
  standalone: true,
  imports: [
    CommonModule,
    PriminitySharedBannerComponent,
    PriminitySharedCardFeatureCardComponent,
  ],
  templateUrl: './priminity-teammembers-feature-teammembers.component.html',
  styleUrls: ['./priminity-teammembers-feature-teammembers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityTeammembersFeatureTeammembersComponent {
  teammembers: Partial<TeamMemberInterface>[] = [
    {
      name: 'Marcel',
      userName: 'DragZ',
      position: 'Admin',
      steamLink: 'https://steamcommunity.com/profiles/76561198109280611',
      twitchLink: 'https://twitch.tv/marceldragz',
    },
    {
      name: 'David',
      userName: 'EroTec.',
      position: 'Supervisor',
      steamLink: 'https://steamcommunity.com/profiles/76561198082035975/',
    },
    {
      name: 'Patrick',
      userName: 'v3x',
      position: 'Supervisor',
      steamLink: 'https://steamcommunity.com/profiles/76561198888365072',
    },
    {
      name: 'Jessi',
      userName: 'Flauschi',
      position: 'Mod',
      steamLink: 'https://steamcommunity.com/profiles/76561198111618293',
    },
    {
      name: 'Tami',
      userName: 's0uls1ster',
      position: 'Mod',
      steamLink: 'https://steamcommunity.com/profiles/76561198026177799',
    },
  ];

  bannerName = 'Teammitglieder';
}

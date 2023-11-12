import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-priminity-teams-feature-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-teams-feature-teams.component.html',
  styleUrls: ['./priminity-teams-feature-teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityTeamsFeatureTeamsComponent {}

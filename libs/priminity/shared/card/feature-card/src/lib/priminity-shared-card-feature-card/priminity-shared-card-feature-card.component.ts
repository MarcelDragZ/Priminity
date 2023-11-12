import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-priminity-shared-card-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-shared-card-feature-card.component.html',
  styleUrls: ['./priminity-shared-card-feature-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminitySharedCardFeatureCardComponent {
  @Input() nickname!: string;
  @Input() name!: string;
  @Input() position!: string;
  @Input() steamlink!: string;
  @Input() twitchlink!: string;
}

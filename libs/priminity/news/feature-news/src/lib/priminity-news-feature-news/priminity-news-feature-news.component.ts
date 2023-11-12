import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-priminity-news-feature-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-news-feature-news.component.html',
  styleUrls: ['./priminity-news-feature-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityNewsFeatureNewsComponent {}

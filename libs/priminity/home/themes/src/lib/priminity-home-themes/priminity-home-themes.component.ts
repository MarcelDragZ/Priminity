import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-priminity-home-themes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-home-themes.component.html',
  styleUrls: ['./priminity-home-themes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityHomeThemesComponent {}

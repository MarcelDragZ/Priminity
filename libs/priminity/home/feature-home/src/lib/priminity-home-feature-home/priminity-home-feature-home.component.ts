import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriminityHomeSlideshowComponent } from '@priminity/priminity/home/slideshow';
import { PriminityHomeThemesComponent } from '@priminity/priminity/home/themes';


@Component({
  selector: 'priminity-priminity-home-feature-home',
  standalone: true,
  imports: [CommonModule, PriminityHomeSlideshowComponent, PriminityHomeThemesComponent],
  templateUrl: './priminity-home-feature-home.component.html',
  styleUrls: ['./priminity-home-feature-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityHomeFeatureHomeComponent { }

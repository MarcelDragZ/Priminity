import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-priminity-home-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-home-slideshow.component.html',
  styleUrls: ['./priminity-home-slideshow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminityHomeSlideshowComponent {
  public scrollTo() {
    window.scrollTo({ top: 880, behavior: 'smooth' });
  }
}

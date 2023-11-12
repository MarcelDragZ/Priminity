import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'priminity-priminity-shared-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-shared-footer.component.html',
  styleUrls: ['./priminity-shared-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminitySharedFooterComponent {
  router: Router = inject(Router);
  year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  public changeRoute(pathName: string) {
    this.router.navigate([pathName]);
  }
}

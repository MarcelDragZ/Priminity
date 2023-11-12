import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'priminity-priminity-shared-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priminity-shared-menu.component.html',
  styleUrls: ['./priminity-shared-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriminitySharedMenuComponent {
  router: Router = inject(Router);
  toggleAdvancedAboutMenu = false;

  public changeRoute(pathName: string) {
    this.router.navigate([pathName]);
    this.toggleAdvancedAboutMenu = false;
  }

  public showAdvancedAboutMenu(value: boolean) {
    if (value && !this.toggleAdvancedAboutMenu) {
      this.toggleAdvancedAboutMenu = value;
    }
    else {
      this.toggleAdvancedAboutMenu = false;
    }
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'priminity-pryaz-login-feature-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pryaz-login-feature-login.component.html',
  styleUrls: ['./pryaz-login-feature-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PryazLoginFeatureLoginComponent {
  router: Router = inject(Router);

  public changeRoute(pathName: string) {
    this.router.navigate([pathName]);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-login-ui-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pryaz-login-ui-login.component.html',
  styleUrls: ['./pryaz-login-ui-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazLoginUiLoginComponent {}

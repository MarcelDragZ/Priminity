import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-forgot-password-ui-forgot-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pryaz-forgot-password-ui-forgot-password.component.html',
  styleUrls: ['./pryaz-forgot-password-ui-forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazForgotPasswordUiForgotPasswordComponent {}

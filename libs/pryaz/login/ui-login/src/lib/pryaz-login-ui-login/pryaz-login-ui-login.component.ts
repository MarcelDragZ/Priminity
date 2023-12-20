import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TeamMemberInterface } from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-login-ui-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: ` <div class="flex justify-center">
    <div
      class="flex items-center flex-col border-userColor border-2 w-full md:w-6/12 rounded"
    >
      <h1 class="text-white text-3xl m-5 pb-2 border-userColor border-b-2">
        Log in
      </h1>

      <form class="flex flex-col items-center w-full mt-5">
        <div class="flex flex-col w-6/12">
          <input
            class="border-userColor border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
            type="text"
            placeholder="Username"
            [(ngModel)]="loginTeamMember.userName"
            name="userName"
            required
          />
          <input
            class="border-userColor border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white mt-5"
            type="password"
            placeholder="Password"
            [(ngModel)]="loginTeamMember.password"
            name="password"
            required
          />
        </div>
        <div class="flex flex-col items-start w-6/12 mt-7 text-white">
          <div><input class="mr-2" type="checkbox" />Remember me</div>
          <div class="mt-2 text-userColor">
            <a [routerLink]="['/forgot-password']">Forgot my password</a>
          </div>
        </div>
        <div class="flex justify-center mt-5 mb-5 w-6/12">
          <button
            (click)="login()"
            class="w-full rounded p-2 text-white bg-userColor hover:opacity-80 transition-all"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>`,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazLoginUiLoginComponent {
  router: Router = inject(Router);

  @Output() loginUser = new EventEmitter<Partial<TeamMemberInterface>>();

  loginTeamMember: Partial<TeamMemberInterface> = {
    userName: '',
    password: '',
  };

  login() {
    this.loginUser.emit(this.loginTeamMember);
  }
}

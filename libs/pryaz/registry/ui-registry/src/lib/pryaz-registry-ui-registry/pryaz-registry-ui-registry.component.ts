import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  RegCode,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-registry-ui-registry',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: ` <div class="flex justify-center w-screen ">
    <div
      class="flex items-center flex-col border-userColor border-2 w-6/12 rounded"
    >
      <div class="flex items-center justify-between">
        <a
          [routerLink]="['/login']"
          class="text-xl text-userColor cursor-pointer"
          >◄</a
        >
        <h1 class="text-white text-3xl m-5 pb-2 border-userColor  border-b-2">
          Sign up
        </h1>

        <span
          *ngIf="registrySuccessful"
          class=" brightness-200 text-green-700 animate-pulse"
        >
          <span class="hue-rotate-180  brightness-75">✔️</span> Erfolgreich
          registriert
        </span>
      </div>
      <form #form="ngForm" class="flex flex-col items-center w-full mt-5">
        <div class="flex justify-between w-8/12">
          <div class="w-5/12">
            <div
              class="text-red-800 text-sm"
              *ngIf="form.controls['name']?.invalid && clickedSignupButton"
            >
              Name required.
            </div>
            <input
              class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Name"
              [(ngModel)]="newTeamMember.name"
              name="name"
              required
            />
          </div>
          <div class="w-5/12">
            <div
              class="text-red-800 text-sm"
              *ngIf="form.controls['userName']?.invalid && clickedSignupButton"
            >
              Username required.
            </div>
            <input
              class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Username"
              [(ngModel)]="newTeamMember.userName"
              name="userName"
              required
            />
          </div>
        </div>

        <div class="flex justify-between w-8/12 mt-5">
          <div class="w-5/12">
            <div
              class="text-red-800 text-sm"
              *ngIf="form.controls['email']?.invalid && clickedSignupButton"
            >
              Email required.
            </div>
            <input
              class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
              type="email"
              placeholder="E-Mail"
              [(ngModel)]="newTeamMember.email"
              name="email"
              required
            />
          </div>

          <div class="w-5/12">
            <div
              class="text-red-800 text-sm"
              *ngIf="form.controls['phone']?.invalid && clickedSignupButton"
            >
              Telefon required.
            </div>
            <input
              class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
              type="number"
              placeholder="Telefon"
              [(ngModel)]="newTeamMember.phone"
              name="phone"
              required
            />
          </div>
        </div>

        <div class="flex justify-between w-8/12 mt-5">
          <div class="w-full">
            <div
              class="text-red-800 text-sm"
              *ngIf="
                form.controls['enteredRegCode']?.invalid && clickedSignupButton
              "
            >
              Reg-Code required.
            </div>
            <input
              class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Reg-Code"
              [(ngModel)]="enteredRegCode"
              name="enteredRegCode"
              required
            />
          </div>
        </div>

        <div class="flex justify-between w-8/12 mt-5">
          <div class="w-full">
            <div
              class="text-red-800 text-sm"
              *ngIf="form.controls['steamLink']?.invalid && clickedSignupButton"
            >
              Steam-Link required.
            </div>
            <input
              class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Steam-Link"
              [(ngModel)]="newTeamMember.steamLink"
              name="steamLink"
              required
            />
          </div>
        </div>
        <div class="flex justify-between w-8/12 mt-5">
          <div class="w-full">
            <div
              class="text-red-800 text-sm"
              *ngIf="form.controls['password']?.invalid && clickedSignupButton"
            >
              Steam-Link required.
            </div>
            <input
              class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
              type="password"
              placeholder="Password"
              [(ngModel)]="newTeamMember.password"
              name="password"
              required
            />
          </div>
        </div>

        <div class="flex justify-center mt-5 mb-10 w-6/12">
          <button
            (click)="signUp(form.invalid)"
            class="w-full rounded p-2 text-white bg-userColor hover:opacity-80 transition-all"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazRegistryUiRegistryComponent {
  router: Router = inject(Router);
  cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  regCode = new RegCode();

  @Output() teamMember = new EventEmitter<{
    teamMember: TeamMemberInterface;
    regCode: string;
  }>();

  enteredRegCode!: string;
  clickedSignupButton = false;
  registrySuccessful = false;

  newTeamMember: TeamMemberInterface = {
    userName: '',
    name: '',
    email: '',
    phone: null,
    password: '',
    position: '',
    avatar: '',
    colorScheme: '',
    birth: '',
    active: true,
    steamLink: '',
    twitchLink: '',
    youtubeLink: '',
    instagramLink: '',
    tiktokLink: '',
    createdTime: null,
  };

  async signUp(invalid: boolean | null) {
    if (invalid) {
      this.setInvalidForm();
    } else {
      const validRegCode = await this.regCode.checkValidRegCode(
        this.enteredRegCode,
      );
      if (validRegCode) {
        this.registrySuccessful = true;
        this.teamMember.emit({
          teamMember: {
            ...this.newTeamMember,
            position: validRegCode[1].position,
            createdTime: new Date().getTime(),
          },
          regCode: validRegCode[0],
        });
        this.resetTeamMemberValues();
      } else {
        return;
      }
    }
  }

  setInvalidForm() {
    this.clickedSignupButton = true;
    setTimeout(() => {
      this.clickedSignupButton = false;
      this.cdRef.detectChanges();
    }, 2500);
  }

  resetTeamMemberValues() {
    this.enteredRegCode = '';
    Object.keys(this.newTeamMember).forEach((key) => {
      const typedKey = key as keyof TeamMemberInterface;
      if (typeof this.newTeamMember[typedKey] === 'string') {
        (this.newTeamMember[typedKey] as unknown as string) = '';
      }
    });
  }
}

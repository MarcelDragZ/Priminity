import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { TeamMemberInterface } from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-shared-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: ` <nav
    class="fixed left-0 top-0 bottom-0 flex flex-col overflow-y-auto justify-between w-48 bg-neutral-900 border-r-2 text-userColor border-userColor"
  >
    <div>
      <div class="flex items-center justify-start  mt-4 ml-4">
        <img class="w-16 img-color" src="/assets/img/logo_simply_black.png" />
        <p class="text-xl font-bold">PryaZ</p>
      </div>

      <a
        *ngIf="activeTeamMember"
        [routerLink]="['/profile', activeTeamMember[0]]"
        class="flex items-center justify-around cursor-pointer w-full bg-neutral-800 mt-5 rounded hover:bg-neutral-900 hover:transition-all "
      >
        <div>
          <img
            class="w-10 object-contain rounded-full"
            src="/assets/img/avatar_priminity.png"
          />
        </div>
        <div class="font-bold ">
          <p class="border-b-2 border-userColor border-solid border-opacity-75">
            {{ activeTeamMember[1].position }}
          </p>
          <p>
            {{ activeTeamMember[1].name }} {{ activeTeamMember[1].userName }}
          </p>
        </div>
      </a>
    </div>

    <!-- NAV HERE -->

    <div class="h-full">
      <div class="flex flex-col ml-3 mr-3 mt-5">
        <a
          [routerLink]="['/home']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/home.png"
          />Home</a
        >
        <a
          [routerLink]="['/task']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/task.png"
          />Aufgaben</a
        >
        <a
          [routerLink]="['/meeting']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/meeting.png"
          />Besprechung</a
        >
      </div>

      <div class="border-b-2 border-neutral-500 border-opacity-20 mt-5 "></div>

      <div class="flex flex-col ml-3 mr-3 mt-5">
        <a
          [routerLink]="['/new-member']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/add_user.png"
          />Neuer Member</a
        >
        <div
          (click)="toggleAdvancedMenu()"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all  p-1 rounded"
        >
          <img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/task.png"
          />
          <span class="mt-2">
            Ansichten
            <span class="text-xs">{{ advancedMenuIcon }}</span>
          </span>
        </div>
        <!-- Advanced Menu on Toggle -->
        <div [class.fade_in]="advancedMenu" class="h-full" *ngIf="advancedMenu">
          <a
            [routerLink]="['/member']"
            class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
            ><img
              class="w-6 object-contain mr-2 img-color"
              src="/assets/img/user.png"
            />Memberliste</a
          >
          <!-- <a
            [routerLink]="['/home']"
            class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
            ><img
              class="w-6 object-contain mr-2 img-color"
              src="/assets/img/user.png"
            />Trialliste</a
          >
          <a
            [routerLink]="['/home']"
            class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
            ><img
              class="w-6 object-contain mr-2 img-color"
              src="/assets/img/user.png"
            />Verifiziertenliste</a
          > -->
        </div>
      </div>

      <div class="border-b-2 border-neutral-500 border-opacity-20 mt-5"></div>

      <div class="flex flex-col ml-3 mr-3 mt-5">
        <a
          [routerLink]="['/teammember/create']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/add_user.png"
          />Neues Teammitglied</a
        >
        <a
          [routerLink]="['/teammember/list']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/user.png"
          />Teammitglieder</a
        >
      </div>

      <div class="border-b-2 border-neutral-500 border-opacity-20 mt-5"></div>

      <div class="flex flex-col ml-3 mr-3 mt-5">
        <a
          [routerLink]="['/organisation']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/orga.png"
          />Organisatorisches</a
        >
        <a
          [routerLink]="['/changelog']"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/changelog.png"
          />Changelog</a
        >
      </div>
    </div>

    <div class="flex justify-center ml-3 mr-3 mb-5">
      <button
        (click)="logout()"
        class="bg-userColor text-white p-1 w-2/3 font-bold rounded hover:opacity-80 transition-all"
      >
        Logout
      </button>
    </div>
  </nav>`,
  styles: [
    `
      .fade_in {
        transition: all 0.2s;
        animation: easeIn 0.5s;
      }

      @keyframes easeIn {
        0% {
          filter: opacity(0);
        }
        100% {
          filter: opacity(1);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazSharedMenuComponent {
  router: Router = inject(Router);

  @Input() activeTeamMember!: [string, TeamMemberInterface] | null;

  advancedMenuIcon = '▶';
  advancedMenu = false;

  toggleAdvancedMenu() {
    if (this.advancedMenu) {
      this.advancedMenuIcon = '▶';
      this.advancedMenu = false;
    } else {
      this.advancedMenuIcon = '▼';
      this.advancedMenu = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

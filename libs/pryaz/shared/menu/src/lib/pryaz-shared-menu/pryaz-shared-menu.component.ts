import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
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
    *ngIf="activeTeamMember"
    [class.hidden]="!toggledMenu"
    class="fixed left-0 top-0 bottom-0 flex flex-col overflow-y-auto justify-between w-full md:w-48 bg-neutral-900 border-r-2 text-userColor border-userColor"
  >
    <div>
      <div class="flex items-center justify-around md:justify-start mt-4">
        <div (click)="toggleMenu(false)">
          <img
            class="w-12 img-color cursor-pointer hover:opacity-80 transition-all"
            src="/assets/img/burger_menu.png"
          />
        </div>
        <div class="flex items-center">
          <img class="w-16 img-color" src="/assets/img/logo_simply_black.png" />
          <p class="text-xl font-bold">PryaZ</p>
        </div>
      </div>

      <a
        *ngIf="activeTeamMember"
        (click)="toggleMenu(true)"
        [routerLink]="['/profile', activeTeamMember[0]]"
        class="flex items-center justify-start pl-4 md:pl-0 md:justify-around cursor-pointer w-full bg-neutral-800 mt-5 rounded hover:bg-neutral-900 hover:transition-all "
      >
        <div>
          <img
            class="w-10 object-contain rounded-full"
            src="/assets/img/avatar_priminity.png"
          />
        </div>
        <div class="font-bold md:ml-0 ml-5">
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
          (click)="toggleMenu(true)"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/home.png"
          />Home</a
        >
        <a
          [routerLink]="['/task']"
          (click)="toggleMenu(true)"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/task.png"
          />Aufgaben</a
        >
        <a
          [routerLink]="['/meeting']"
          (click)="toggleMenu(true)"
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
          [routerLink]="['/member/create']"
          (click)="toggleMenu(true)"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/add_user.png"
          />Neuer Member</a
        >
        <a
          [routerLink]="['/member']"
          (click)="toggleMenu(true)"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/user.png"
          />Memberliste</a
        >
        <!-- <div
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
        </div> -->
        <!-- Advanced Menu on Toggle -->
        <!-- <div [class.fade_in]="advancedMenu" class="h-full" *ngIf="advancedMenu">
          <a
            [routerLink]="['/member']"
            class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
            ><img
              class="w-6 object-contain mr-2 img-color"
              src="/assets/img/user.png"
            />Memberliste</a
          >
        </div> -->
      </div>

      <div
        *ngIf="
          activeTeamMember[1].position === 'Admin' ||
          activeTeamMember[1].position === 'Supervisor' ||
          activeTeamMember[1].position === 'Head-Mod'
        "
        class="border-b-2 border-neutral-500 border-opacity-20 mt-5"
      ></div>

      <div
        *ngIf="
          activeTeamMember[1].position === 'Admin' ||
          activeTeamMember[1].position === 'Supervisor' ||
          activeTeamMember[1].position === 'Head-Mod'
        "
        class="flex flex-col ml-3 mr-3 mt-5"
      >
        <a
          [routerLink]="['/teammember/create']"
          (click)="toggleMenu(true)"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/add_user.png"
          />Neues Teammitglied</a
        >
        <a
          [routerLink]="['/teammember/list']"
          (click)="toggleMenu(true)"
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
          (click)="toggleMenu(true)"
          class="flex items-center cursor-pointer hover:bg-neutral-800 hover:transition-all p-1 rounded"
          ><img
            class="w-6 object-contain mr-2 img-color"
            src="/assets/img/orga.png"
          />Organisatorisches</a
        >
        <a
          [routerLink]="['/changelog']"
          (click)="toggleMenu(true)"
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
export class PryazSharedMenuComponent implements OnChanges {
  router: Router = inject(Router);

  @Input() activeTeamMember!: [string, TeamMemberInterface] | null;
  @Input() toggleMenuInput!: boolean | null;
  @Output() emitToggledMenu = new EventEmitter<boolean>();

  toggledMenu = true;
  advancedMenuIcon = '▶';
  advancedMenu = false;

  // toggleAdvancedMenu() {
  //   if (this.advancedMenu) {
  //     this.advancedMenuIcon = '▶';
  //     this.advancedMenu = false;
  //   } else {
  //     this.advancedMenuIcon = '▼';
  //     this.advancedMenu = true;
  //   }
  // }
  ngOnChanges(): void {
    this.toggledMenu = this.toggleMenuInput as boolean;
  }

  toggleMenu(value: boolean) {
    if (this.toggledMenu && window.innerWidth < 768) {
      this.toggledMenu = false;
      this.emitToggledMenu.emit();
    }
    if (this.toggledMenu && window.innerWidth > 768 && !value) {
      this.toggledMenu = false;
      this.emitToggledMenu.emit();
    } else {
      this.toggledMenu = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

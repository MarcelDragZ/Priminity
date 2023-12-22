import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
@Component({
  selector: 'priminity-pryaz-teammember-ui-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="flex justify-between flex-col md:flex-row  items-center m-5 border-userColor border-b-2 rounded"
    >
      <div
        class="flex flex-col md:flex-row text-center md:text-left items-center m-5"
      >
        <img class="w-44 rounded-full" src="/assets/img/avatar_priminity.png" />
        <div
          class="flex flex-col justify-around md:ml-5 text-white font-bold md:h-36"
        >
          <div>
            <select
              *ngIf="editProfile"
              name="editTeamMember.position"
              class="bg-userColor text-white rounded p-1 cursor-pointer"
              [(ngModel)]="editTeamMember.position"
            >
              <option selected value="{{ editTeamMember.position }}">
                {{ editTeamMember.position }}
              </option>
              <option *ngIf="editTeamMember.position !== 'Admin'" value="Admin">
                Admin
              </option>
              <option
                *ngIf="editTeamMember.position !== 'Supervisor'"
                value="Supervisor"
              >
                Supervisor
              </option>
              <option
                *ngIf="editTeamMember.position !== 'Manager'"
                value="Manager"
              >
                Manager
              </option>
              <option *ngIf="editTeamMember.position !== 'Mod'" value="Mod">
                Mod
              </option>
              <option
                *ngIf="editTeamMember.position !== 'Trial-Mod'"
                value="Trial-Mod"
              >
                Trial-Mod
              </option>
            </select>
            <span *ngIf="!editProfile">{{ editTeamMember.position }}</span>
            <div
              class="flex
             flex-col"
            >
              <input
                *ngIf="editProfile"
                class="bg-transparent border-b-2 border-userColor rounded mt-2"
                type="text"
                name="editTeamMember.name"
                [(ngModel)]="editTeamMember.name"
              />
              <input
                *ngIf="editProfile"
                class="bg-transparent border-b-2 border-userColor rounded mt-2"
                type="text"
                name="editTeamMember.userName"
                [(ngModel)]="editTeamMember.userName"
              />
              <span *ngIf="!editProfile"
                >{{ editTeamMember.name }} {{ editTeamMember.userName }}</span
              >
            </div>
          </div>
          <span
            class="text-center rounded p-0.5 mt-5 md:mt-0"
            [ngClass]="
              specificTeamMember?.active ? 'bg-green-600' : 'bg-red-600'
            "
            >{{
              specificTeamMember?.active ? 'Aktiviert' : 'Deaktiviert'
            }}</span
          >
        </div>
      </div>
      <div class="m-5 text-white font-bold">
        <div class="flex justify-between">
          <button
            *ngIf="editProfile"
            (click)="saveEditProfile()"
            class="bg-userColor w-2/4 rounded p-0.5 hover:opacity-80 transition-all mr-2"
          >
            Speichern
          </button>
          <button
            *ngIf="editProfile"
            (click)="toggleEditProfile()"
            class="bg-userColor w-2/4 rounded p-0.5 hover:opacity-80 transition-all"
          >
            Abbrechen
          </button>
        </div>
        <div class="flex flex-col">
          <button
            *ngIf="!editProfile"
            (click)="toggleEditProfile()"
            class="bg-userColor rounded p-0.5 hover:opacity-80 transition-all"
          >
            Profil bearbeiten
          </button>
          <button
            (click)="toggleTeamMemberActive()"
            [ngClass]="
              specificTeamMember?.active ? 'bg-red-600' : 'bg-green-600'
            "
            class=" rounded mt-2 p-0.5 hover:opacity-80 transition-all"
          >
            Teammitglied
            {{ specificTeamMember?.active ? 'Deaktivieren' : 'Aktivieren' }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-around m-5 text-white">
      <div class="flex flex-col w-1/4">
        <span class="text-userColor font-bold mb-5">Informationen</span>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>Email:</span>
          <span class="mb-4">{{ editTeamMember.email }}</span>
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>Email:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.email"
            [(ngModel)]="editTeamMember.email"
          />
        </div>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>Telefon:</span>
          <span class="mb-4">{{ editTeamMember.phone }}</span>
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>Telefon:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="number"
            name="editTeamMember.phone"
            [(ngModel)]="editTeamMember.phone"
          />
        </div>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>Geburtstag:</span>
          <span class="mb-4">{{ editTeamMember.birth }}</span>
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>Geburtstag:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="date"
            name="editTeamMember.birth"
            [(ngModel)]="editTeamMember.birth"
          />
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <span class="text-userColor font-bold mb-5">Kontakt</span>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>Steam:</span>
          <span class="mb-4"
            ><a
              *ngIf="editTeamMember.steamLink"
              class="decoration-slate-400 text-blue-500"
              href="{{ editTeamMember.steamLink }}"
              target="_blank"
              >zu Steam</a
            ></span
          >
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>Steam:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.steamLink"
            [(ngModel)]="editTeamMember.steamLink"
          />
        </div>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>Twitch:</span>
          <span class="mb-4"
            ><a
              *ngIf="editTeamMember.twitchLink"
              class="decoration-slate-400 text-blue-500"
              href="{{ editTeamMember.twitchLink }}"
              target="_blank"
              >zu Twitch</a
            ></span
          >
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>Twitch:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.twitchLink"
            [(ngModel)]="editTeamMember.twitchLink"
          />
        </div>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>YouTube:</span>
          <span class="mb-4"
            ><a
              *ngIf="editTeamMember.youtubeLink"
              class="decoration-slate-400 text-blue-500"
              href="{{ editTeamMember.youtubeLink }}"
              target="_blank"
              >zu YouTube</a
            ></span
          >
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>YouTube:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.youtubeLink"
            [(ngModel)]="editTeamMember.youtubeLink"
          />
        </div>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>Instagram:</span>
          <span class="mb-4"
            ><a
              *ngIf="editTeamMember.instagramLink"
              class="decoration-slate-400 text-blue-500"
              href="{{ editTeamMember.instagramLink }}"
              target="_blank"
              >zu Instagram</a
            ></span
          >
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>Instagram:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.instagramLink"
            [(ngModel)]="editTeamMember.instagramLink"
          />
        </div>

        <div *ngIf="!editProfile" class="flex flex-col">
          <span>TikTok:</span>
          <span class="mb-4"
            ><a
              *ngIf="editTeamMember.tiktokLink"
              class="decoration-slate-400 text-blue-500"
              href="{{ editTeamMember.tiktokLink }}"
              target="_blank"
              >zu TikTok</a
            ></span
          >
        </div>
        <div *ngIf="editProfile" class="flex flex-col">
          <span>TikTok:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.tiktokLink"
            [(ngModel)]="editTeamMember.tiktokLink"
          />
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <span class="text-userColor font-bold mb-5">Allgemein</span>

        <span>Erstellte Member:</span>
        <span class="mb-4">{{ createdMembersCount }}</span>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberUiDetailComponent implements OnChanges {
  @Input() teamMemberId!: string;
  @Input() memberList!: [string, MemberInterface][] | null;
  @Input() set specificTeamMember(value: TeamMemberInterface | null) {
    this._specificTeamMember = value;
    if (value && !this.editProfile) {
      this.editTeamMember = {
        name: value.name,
        userName: value.userName,
        position: value.position,
        email: value.email,
        phone: value.phone || null,
        birth: value.birth,
        steamLink: value.steamLink,
        twitchLink: value.twitchLink,
        youtubeLink: value.youtubeLink,
        instagramLink: value.instagramLink,
        tiktokLink: value.tiktokLink,
      };
    }
  }

  get specificTeamMember(): TeamMemberInterface | null {
    return this._specificTeamMember;
  }

  @Output() emitTeamMember = new EventEmitter<Partial<TeamMemberInterface>>();

  teamMember = new TeamMember();

  _specificTeamMember!: TeamMemberInterface | null;
  editTeamMember: Partial<TeamMemberInterface> = {};
  editProfile = false;
  createdMembersCount = 0;

  ngOnChanges(): void {
    if (this.memberList) {
      this.memberList!.forEach((member) => {
        if (member[1].creatorId === this.teamMemberId) {
          this.createdMembersCount++;
        }
      });
    }
  }

  editValues() {
    this.editTeamMember = {
      name: this.specificTeamMember?.name,
      userName: this.specificTeamMember?.userName,
      position: this.specificTeamMember?.position,
      email: this.specificTeamMember?.email,
      phone: this.specificTeamMember?.phone || null,
      birth: this.specificTeamMember?.birth,
      steamLink: this.specificTeamMember?.steamLink,
      twitchLink: this.specificTeamMember?.twitchLink,
      youtubeLink: this.specificTeamMember?.youtubeLink,
      instagramLink: this.specificTeamMember?.instagramLink,
      tiktokLink: this.specificTeamMember?.tiktokLink,
    };
  }

  toggleEditProfile() {
    if (this.editProfile) {
      this.editProfile = false;
      this.editValues();
    } else {
      this.editProfile = true;
    }
  }

  saveEditProfile() {
    this.emitTeamMember.emit(this.editTeamMember);
    this.toggleEditProfile();
  }

  toggleTeamMemberActive() {
    if (this.specificTeamMember?.active === true) {
      this.emitTeamMember.emit({ active: false });
    } else {
      this.emitTeamMember.emit({ active: true });
    }
  }
}

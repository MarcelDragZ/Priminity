import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'priminity-pryaz-profile-ui-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ColorPickerModule],
  template: `
    <div
      class="flex justify-between  items-center m-5 border-userColor border-b-2 rounded"
    >
      <div class="flex items-center m-5">
        <img class="w-44 rounded-full" src="/assets/img/avatar_priminity.png" />
        <div
          class="flex flex-col justify-around ml-5 text-white font-bold h-36"
        >
          <div>
            <span>{{ specificTeamMember?.position }}</span>
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
          <span class="mt-5" *ngIf="editProfile">Wähle Farbschema</span>
          <input
            class="rounded cursor-pointer"
            *ngIf="editProfile"
            [cpAlphaChannel]="'disabled'"
            [(colorPicker)]="editTeamMember.colorScheme!"
            [style.background]="editTeamMember.colorScheme"
          />
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
            (click)="toggleEditProfile(false)"
            class="bg-userColor w-2/4 rounded p-0.5 hover:opacity-80 transition-all"
          >
            Abbrechen
          </button>
        </div>
        <div class="flex flex-col">
          <button
            *ngIf="!editProfile"
            (click)="toggleEditProfile(true)"
            class="bg-userColor rounded p-0.5 hover:opacity-80 transition-all"
          >
            Profil bearbeiten
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-around m-5 text-white">
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
export class PryazProfileUiProfileComponent implements OnChanges {
  @Input() teamMemberId!: string;
  @Input() memberList!: [string, MemberInterface][] | null;
  @Input() set specificTeamMember(value: TeamMemberInterface | null) {
    this._specificTeamMember = value;
    if (value && !this.editProfile) {
      this.editTeamMember = {
        name: value.name,
        userName: value.userName,
        email: value.email,
        phone: value.phone || null,
        birth: value.birth,
        colorScheme: value.colorScheme,
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

  teamMember = new TeamMember();

  _specificTeamMember!: TeamMemberInterface | null;
  editTeamMember: Partial<TeamMemberInterface> = {};
  editProfile = false;
  colorScheme = '';
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

  toggleEditProfile(toggle: boolean) {
    this.editProfile = toggle;
  }

  async saveEditProfile() {
    this.toggleEditProfile(false);
    await this.teamMember.updateItem(this.teamMemberId, this.editTeamMember);
  }
}

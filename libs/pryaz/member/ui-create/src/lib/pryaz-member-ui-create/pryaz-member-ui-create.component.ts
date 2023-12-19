import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import { PryazMemberUiConversationGuideComponent } from '@priminity/pryaz/member/ui-conversation-guide';
import {
  MemberInterface,
  TeamMember,
  Timestamp,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-member-ui-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PryazSharedHeadlineComponent,
    PryazMemberUiConversationGuideComponent,
  ],
  template: `
    <priminity-pryaz-shared-headline [title]="'Member erstellen'" />

    <div class="border-b-2 border-userColor"></div>

    <div class="flex lg:flex-row flex-col text-white">
      <form
        #form="ngForm"
        class="flex flex-col justify-between w-full lg:w-8/12 full_height border-r-2 border-userColor"
      >
        <div class="flex p-5">
          <div class="w-2/3">
            <div class="flex flex-col">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.memberState']?.invalid &&
                  clickedCreateButton
                "
              >
                Status required.
              </div>
              <label>Verifizieren | Trial:</label>
              <select
                class="bg-userColor w-2/3 lg:w-1/2 mt-2 rounded p-1 cursor-pointer"
                name="newMember.memberState"
                [(ngModel)]="newMember.memberState"
                required
              >
                <option selected disabled hidden value="">
                  Wähle Status...
                </option>
                <option value="verified">Verifiziert</option>
                <option value="trial">Trial</option>
              </select>
            </div>
            <div *ngIf="newMember.memberState === 'trial'">
              <div class="flex flex-col items-start w-full mt-5">
                <div
                  class="text-red-800 text-sm"
                  *ngIf="
                    form.controls['currentDate']?.invalid && clickedCreateButton
                  "
                >
                  Date required.
                </div>
                <div class="w-full">
                  <label class="mr-5">Trialbeginn:</label>
                  <input
                    class="border-userColor border-b-2 p-2 w-full rounded bg-transparent"
                    type="date"
                    name="currentDate"
                    [(ngModel)]="currentDate"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-col items-start w-full mt-5">
                <div
                  class="text-red-800 text-sm"
                  *ngIf="
                    form.controls['trialEndDate']?.invalid &&
                    clickedCreateButton
                  "
                >
                  Date required.
                </div>
                <div class="w-full">
                  <label class="mr-9">Trialende:</label>
                  <input
                    class="border-userColor border-b-2 p-2 w-full rounded bg-transparent"
                    type="date"
                    name="trialEndDate"
                    [(ngModel)]="trialEndDate"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div *ngIf="creationSuccessful">
            <span class=" brightness-200 text-green-700 animate-pulse">
              <span class="hue-rotate-180  brightness-75">✔️</span> Erfolgreich
              erstellt
            </span>
          </div>
          <div *ngIf="errorCreating">
            <span class=" brightness-200 text-red-700 animate-pulse">
              <span class="hue-rotate-15">❌</span> Nutzer bereits angelegt !
            </span>
          </div>
        </div>

        <div class="border-b-2 border-userColor mt-1 mb-1"></div>

        <div class="p-5">
          <div class="flex flex-col lg:flex-row justify-between">
            <div class="flex flex-col items-start w-2/3 mr-5 mb-2">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.userName']?.invalid &&
                  clickedCreateButton
                "
              >
                Username required.
              </div>
              <div class="flex lg:flex-row flex-col w-full mb-5">
                <label class="ml-1 mr-2">Username:</label>
                <input
                  class="border-userColor border-b-2 p-2 w-full lg:w-full rounded bg-transparent"
                  type="text"
                  name="newMember.userName"
                  [(ngModel)]="newMember.userName"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col items-start w-2/3 mr-5 mb-2">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.name']?.invalid &&
                  clickedCreateButton
                "
              >
                Name required.
              </div>
              <div class="flex lg:flex-row flex-col w-full mb-5">
                <label class="ml-1 mr-2">Name:</label>
                <input
                  class="border-userColor border-b-2 p-2 w-full lg:w-full rounded bg-transparent"
                  type="text"
                  name="newMember.name"
                  [(ngModel)]="newMember.name"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col items-start w-2/3">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.age']?.invalid && clickedCreateButton
                "
              >
                Age required.
              </div>
              <div class="flex lg:flex-row flex-col w-full mb-5">
                <label class="ml-1 mr-2">Alter:</label>
                <input
                  class="border-userColor border-b-2 p-2 w-full lg:w-full rounded bg-transparent"
                  type="number"
                  name="newMember.age"
                  [(ngModel)]="newMember.age"
                  required
                />
              </div>
            </div>
          </div>

          <div
            class="flex flex-col lg:flex-row lg:items-center justify-between mt-10"
          >
            <div class="flex flex-col items-start w-2/3 mb-5 mr-5">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.steamLink']?.invalid &&
                  clickedCreateButton
                "
              >
                Steamlink required.
              </div>
              <div class="flex w-full lg:flex-row flex-col">
                <label class="ml-1 mr-2">Steamlink:</label>
                <input
                  class="border-userColor w-full border-b-2 p-2 rounded bg-transparent"
                  type="text"
                  name="newMember.steamLink"
                  [(ngModel)]="newMember.steamLink"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col items-start w-2/3 mb-2">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.tsId']?.invalid &&
                  clickedCreateButton
                "
              >
                TeamSpeak-Id required.
              </div>
              <div class="flex w-full lg:flex-row flex-col">
                <label class="ml-1 w-40 mr-2">TeamSpeak Id:</label>
                <input
                  class="border-userColor w-full border-b-2 p-2 rounded bg-transparent"
                  type="text"
                  name="newMember.tsId"
                  [(ngModel)]="newMember.tsId"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="border-b-2 border-userColor mt-1 mb-1"></div>

        <div class="p-5 flex sm:flex-row flex-col justify-between">
          <div class="flex flex-col w-2/3 sm:w-1/3">
            <div class="flex flex-col">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.rank']?.invalid &&
                  clickedCreateButton
                "
              >
                Cs2-Rank required.
              </div>
              <label>Cs2 Rank:</label>
              <select
                class="bg-userColor w-full mt-2 rounded p-1 cursor-pointer"
                name="newMember.rank"
                [(ngModel)]="newMember.rank"
                required
              >
                <option selected disabled hidden value="">Wähle Rang...</option>
                <option value="Unranked">Unranked</option>
                <option value="1000 Elo">1000 Elo</option>
                <option value="2000 Elo">2000 Elo</option>
                <option value="3000 Elo">3000 Elo</option>
                <option value="4000 Elo">4000 Elo</option>
                <option value="5000 Elo">5000 Elo</option>
                <option value="6000 Elo">6000 Elo</option>
                <option value="6000 Elo">6000 Elo</option>
                <option value="7000 Elo">7000 Elo</option>
                <option value="8000 Elo">8000 Elo</option>
                <option value="9000 Elo">9000 Elo</option>
                <option value="10.000 Elo">10.000 Elo</option>
                <option value="11.000 Elo">11.000 Elo</option>
                <option value="12.000 Elo">12.000 Elo</option>
                <option value="13.000 Elo">13.000 Elo</option>
                <option value="14.000 Elo">14.000 Elo</option>
                <option value="15.000 Elo">15.000 Elo</option>
                <option value="16.000 Elo">16.000 Elo</option>
                <option value="17.000 Elo">17.000 Elo</option>
                <option value="18.000 Elo">18.000 Elo</option>
                <option value="18.000 Elo">18.000 Elo</option>
                <option value="19.000 Elo">19.000 Elo</option>
                <option value="20.000 Elo">20.000 Elo</option>
                <option value="21.000 Elo">21.000 Elo</option>
                <option value="22.000 Elo">22.000 Elo</option>
                <option value="23.000 Elo">23.000 Elo</option>
                <option value="24.000 Elo">24.000 Elo</option>
                <option value="25.000 Elo">25.000 Elo</option>
                <option value="26.000 Elo">26.000 Elo</option>
                <option value="27.000 Elo">27.000 Elo</option>
                <option value="28.000 Elo">28.000 Elo</option>
                <option value="29.000 Elo">29.000 Elo</option>
                <option value="30.000 Elo">30.000 Elo</option>
                <option value="31.000 Elo">31.000 Elo</option>
                <option value="32.000 Elo">32.000 Elo</option>
                <option value="33.000 Elo">33.000 Elo</option>
                <option value="34.000 Elo">34.000 Elo</option>
                <option value="35.000 Elo">35.000 Elo</option>
              </select>
            </div>
            <div class="flex flex-col mt-5">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.faceitRank']?.invalid &&
                  clickedCreateButton
                "
              >
                Faceit-Rank required.
              </div>
              <label>Faceit:</label>
              <select
                class="bg-userColor w-full mt-2 rounded p-1 cursor-pointer"
                name="newMember.faceitRank"
                [(ngModel)]="newMember.faceitRank"
                required
              >
                <option disabled selected hidden value="">Wähle Rang...</option>
                <option value="Kein Faceit">Kein Faceit</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div class="flex flex-col mt-5">
              <div
                class="text-red-800 text-sm"
                *ngIf="
                  form.controls['newMember.countryState']?.invalid &&
                  clickedCreateButton
                "
              >
                Bundesland required.
              </div>
              <label>Bundesland:</label>
              <select
                class="bg-userColor w-full mt-2 rounded p-1 cursor-pointer"
                name="newMember.countryState"
                [(ngModel)]="newMember.countryState"
                required
              >
                <option disabled selected hidden value="">
                  Wähle Bundesland...
                </option>
                <option value="Baden-Württemberg">Baden-Württemberg</option>
                <option value="Bayern">Bayern</option>
                <option value="Berlin">Berlin</option>
                <option value="Brandenburg">Brandenburg</option>
                <option value="Bremen">Bremen</option>
                <option value="Hessen">Hessen</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Mecklenburg-Vorpommern">
                  Mecklenburg-Vorpommern
                </option>
                <option value="Niedersachsen">Niedersachsen</option>
                <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                <option value="Saarland">Saarland</option>
                <option value="Sachsen">Sachsen</option>
                <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                <option value="Thüringen">Thüringen</option>
                <option value="Österreich">Österreich</option>
                <option value="Schweiz">Schweiz</option>
              </select>
            </div>
          </div>
          <div class="w-2/3 h-64 sm:ml-5 mb-7 mt-5 sm:mt-0">
            <label>Infos | Smurfs:</label>
            <textarea
              name=""
              class="w-full h-full mt-2 rounded border-userColor border-2 bg-transparent"
              name="newMember.info"
              [(ngModel)]="newMember.info"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-center p-5">
          <button
            (click)="createMember(form.invalid)"
            class="text-center p-2 bg-userColor w-2/3 rounded hover:opacity-80 transition-all"
          >
            Member erstellen
          </button>
        </div>
      </form>

      <!-- GESPRÄCHSLEITFADEN -->

      <div class="w-full lg:w-4/12 p-5">
        <priminity-pryaz-member-ui-conversation-guide />
      </div>
    </div>
  `,
  styles: [
    `
      .full_height {
        min-height: calc(100vh - 74px);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiCreateComponent {
  cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  timestamp = new Timestamp();
  teamMember = new TeamMember();

  @Input() memberList!: [string, MemberInterface][] | null;
  @Output() emitMember = new EventEmitter<MemberInterface>();

  currentTime = new Date().getTime();
  trialEndTime = this.timestamp.getWednesdayInTwoWeeks();
  currentDate = this.timestamp.getIsoDateFromTimestamp(this.currentTime);
  trialEndDate = this.timestamp.getIsoDateFromTimestamp(this.trialEndTime);
  clickedCreateButton = false;
  creationSuccessful = false;
  errorCreating = false;

  newMember: MemberInterface = {
    creatorId: '',
    createdTime: null,
    name: '',
    userName: '',
    age: null,
    countryState: '',
    faceitRank: '',
    rank: '',
    tsId: '',
    steamLink: '',
    info: '',
    memberState: '',
    trialState: {
      type: '',
      typeChangeTime: null,
      trialEndTime: null,
      trialPhases: 0,
      trialPhasesExtended: 0,
      reason: '',
    },
  };

  async createMember(invalid: boolean | null) {
    const teamMember = await this.teamMember.checkValidTeamMember();

    if (invalid) {
      this.setInvalidForm();
    } else {
      if (this.memberInList(this.newMember.steamLink)) {
        this.errorCreating = true;
        setTimeout(() => {
          this.errorCreating = false;
          this.cdRef.detectChanges();
        }, 2500);
        return;
      } else {
        this.creationSuccessful = true;
        if (this.newMember.memberState === 'verified' && teamMember) {
          this.emitMember.emit({
            ...this.newMember,
            createdTime: new Date().getTime(),
            creatorId: teamMember[0],
            trialState: {
              type: '-',
              typeChangeTime: new Date().getTime(),
              trialEndTime: null,
              trialPhases: 0,
              trialPhasesExtended: 0,
              reason: '',
            },
          });
        }
        if (this.newMember.memberState === 'trial' && teamMember) {
          this.emitMember.emit({
            ...this.newMember,
            createdTime: new Date().getTime(),
            creatorId: teamMember[0],
            trialState: {
              type: 'trial',
              typeChangeTime: new Date().getTime(),
              trialEndTime: this.trialEndTime,
              trialPhases: 1,
              trialPhasesExtended: 0,
              reason: '',
            },
          });
        }
        this.resetMemberValues();
        setTimeout(() => {
          this.creationSuccessful = false;
          this.cdRef.detectChanges();
        }, 2500);
      }
    }
  }

  memberInList(newMemberSteam: string) {
    return this.memberList?.find(
      (member: [string, MemberInterface]) =>
        member[1].steamLink === newMemberSteam,
    );
  }

  setInvalidForm() {
    this.clickedCreateButton = true;
    setTimeout(() => {
      this.clickedCreateButton = false;
      this.cdRef.detectChanges();
    }, 2500);
  }

  resetMemberValues() {
    this.newMember.age = null;
    Object.keys(this.newMember).forEach((key) => {
      const typedKey = key as keyof MemberInterface;
      if (typeof this.newMember[typedKey] === 'string') {
        (this.newMember[typedKey] as unknown as string) = '';
      }
    });
  }
}

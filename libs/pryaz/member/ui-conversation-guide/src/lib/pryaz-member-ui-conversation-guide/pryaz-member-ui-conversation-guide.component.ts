import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-member-ui-conversation-guide',
  standalone: true,
  imports: [CommonModule],
  template: `<h2 class="text-userColor text-xl mb-5">Gesprächsleitfaden</h2>

    <p class="mb-2">Stelle sicher das du alle Punkte des Users einträgst:</p>

    <li>Username / Name</li>
    <li>Alter</li>
    <li>Steam-Link</li>
    <li>Teamspeak-Client ID</li>
    <li>Cs2 Rank</li>
    <li>Faceit Rank</li>
    <li class="mb-5">Bundesland</li>

    <span>
      <p class="mb-2">Überprüfe sein Steam Profil auf Banns !</p>

      <li>
        <a
          class="text-blue-500"
          target="_blank"
          href="https://faceitfinder.com/"
          >Faceit Finder</a
        >
      </li>
      <li class="mb-5">
        <a class="text-blue-500" target="_blank" href="https://steamid.uk/"
          >Steam ID Uk</a
        >
      </li>
    </span>

    <p class="font-bold mb-2">Steam Gruppen:</p>

    <li>
      <a
        class="text-blue-500"
        target="_blank"
        href="https://steamcommunity.com/groups/PriminityGaming"
        >Priminity Gruppe</a
      >
    </li>
    <li class="mb-5">
      <a
        class="text-blue-500"
        target="_blank"
        href="https://steamcommunity.com/groups/PriminityTrials"
        >Priminity Trial Gruppe</a
      >
    </li>

    <p class="font-bold mb-2">Priminity Homepage:</p>
    <p class="mb-2">
      Bei der Priminity Homepage kannst du ein Logo deiner wahl herunterladen.
      Eine Liste aller Teammitglieder findest du ebenfalls hier. Künftig kannst
      du dort auch deine Anliegen uns mitteilen !
    </p>

    <li class="mb-5">
      <a class="text-blue-500" target="_blank" href="https://priminity.net"
        >Priminity Homepage</a
      >
    </li>

    <p class="font-bold mb-2">Regeln:</p>
    <p class="mb-2">
      Die Regeln sind im TeamSpeak unter "Organisatorisches" zu finden.
      Ebenfalls steht dort die Priminity Homepage, wo ALLE Regeln zu finden
      sind.
    </p>

    <p class="font-bold">Rückfragen ?</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiConversationGuideComponent {}

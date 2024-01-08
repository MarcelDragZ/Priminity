import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CommentInterface,
  DialogActionInterface,
  Member,
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
  Timestamp,
} from '@priminity/shared/environments/classes';
import { PryazSharedFullscreenDialogComponent } from '@priminity/pryaz/shared/fullscreen-dialog';
@Component({
  selector: 'priminity-pryaz-member-ui-comment',
  standalone: true,
  imports: [CommonModule, FormsModule, PryazSharedFullscreenDialogComponent],
  template: `
    <div
      class="w-full text-userColor font-bold rounded border-userColor border-2"
    >
      <div class="w-full p-3 rounded bg-neutral-900">Kommentare</div>

      <div class="comment_height overflow-y-auto">
        <!-- comment -->
        <ng-container *ngFor="let comment of getCommentEntries()">
          <div class="flex flex-col justify-start p-3 w-full">
            <div class="flex">
              <div>
                <img
                  class="rounded-full object-contain h-9 mt-1"
                  src="/assets/img/avatar_priminity.png"
                />
              </div>
              <div class="ml-3 bg-neutral-900 w-full rounded">
                <div class="p-1 pt-2 pb-2">
                  {{ teamMember.getNameById(comment[1].creatorId) | async }}
                </div>

                <div class="w-full border-b-2 border-userColor"></div>

                <div class="p-1 pt-2 pb-2 text-white font-normal">
                  {{ comment[1].description }}
                </div>
              </div>
            </div>
            <div class="flex pl-12 mt-1 font-normal">
              <div class="text-white">
                {{ timestamp.getDateFromTimestamp(comment[1].createdTime) }}
                {{ timestamp.getTimeFromTimestamp(comment[1].createdTime) }} Uhr
              </div>

              <div
                *ngIf="
                  specificTeamMember![1].position === 'Admin' ||
                  specificTeamMember![0] === comment[1].creatorId
                "
                (click)="editComment(comment)"
                class="ml-4 font-semibold hover:opacity-80 transition-all cursor-pointer"
              >
                Bearbeiten
              </div>
              <div
                *ngIf="
                  specificTeamMember![1].position === 'Admin' ||
                  specificTeamMember![0] === comment[1].creatorId
                "
                (click)="deleteComment(comment)"
                class="ml-4 font-semibold hover:opacity-80 transition-all cursor-pointer"
              >
                Löschen
              </div>
            </div>
          </div>
        </ng-container>
        <!-- comment -->
      </div>

      <div class="w-full border-b-2 border-userColor"></div>

      <!-- write comment -->
      <div class="flex items-center p-3 w-full">
        <img
          class="rounded-full object-contain h-9 mt-1"
          src="/assets/img/avatar_priminity.png"
        />

        <input
          class=" bg-transparent border-b-2 border-userColor p-1 ml-3 w-full rounded text-white placeholder:text-white"
          placeholder="Schreibe einen Kommentar..."
          name="newComment.description"
          [(ngModel)]="newComment.description"
          type="text"
        />

        <button
          (click)="addComment()"
          class="m-2 p-1 rounded bg-userColor text-white"
        >
          Senden
        </button>
      </div>
      <!-- write comment -->
    </div>

    <priminity-pryaz-shared-fullscreen-dialog
      *ngIf="edit"
      [dialogEvent]="{
        title: 'Kommentar',
        action: dialogCommentAction
      }"
      [specificInput]="specificComment!"
      (emitDialogEvent)="dialogAction($event)"
    />
  `,
  styles: [
    `
      .comment_height {
        height: 550px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiCommentComponent {
  @Input() specificMember!: MemberInterface | null;
  @Input() specificTeamMember!: [string, TeamMemberInterface] | null;
  @Input() memberId!: string;

  @Output() emitComment = new EventEmitter<CommentInterface>();

  member = new Member();
  teamMember = new TeamMember();
  timestamp = new Timestamp();

  edit = false;
  dialogCommentAction!: string;
  specificComment?: [string, CommentInterface];
  newComment: CommentInterface = {
    creatorId: '',
    createdTime: null,
    description: '',
    type: 'teamMember',
    memberId: '',
  };

  getCommentEntries() {
    if (this.specificMember!.comments) {
      return Object.entries(this.specificMember!.comments);
    } else {
      return [];
    }
  }

  addComment() {
    this.emitComment.emit({
      ...this.newComment,
      creatorId: this.specificTeamMember![0],
      createdTime: new Date().getTime(),
      memberId: this.memberId,
    });
    this.newComment.description = '';
  }

  editComment(comment: [string, CommentInterface]) {
    this.specificComment = comment;
    this.dialogCommentAction = 'edit';
    this.toggleEditComment();
  }

  deleteComment(comment: [string, CommentInterface]) {
    this.specificComment = comment;
    this.dialogCommentAction = 'delete';
    this.toggleEditComment();
  }

  toggleEditComment() {
    if (this.edit) {
      this.edit = false;
    } else {
      this.edit = true;
    }
  }

  async dialogAction(dialogAction: DialogActionInterface) {
    this.edit = false;
    if (dialogAction.action === 'edit') {
      await this.member.updateCommentItem(
        this.memberId,
        this.specificComment![0],
        { description: dialogAction.description },
      );
    }
    if (dialogAction.action === 'delete') {
      await this.member.deleteCommentItem(
        this.memberId,
        this.specificComment![0],
      );
    }
  }
}

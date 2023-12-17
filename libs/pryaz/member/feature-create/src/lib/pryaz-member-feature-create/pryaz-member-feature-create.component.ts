import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

import { PryazMemberUiCreateComponent } from '@priminity/pryaz/member/ui-create';
import {
  Member,
  MemberInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-member-feature-create',
  standalone: true,
  imports: [CommonModule, PryazMemberUiCreateComponent],
  template: `<priminity-pryaz-member-ui-create
    [memberList]="memberList$ | async"
    (emitMember)="createMember($event)"
  />`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberFeatureCreateComponent {
  member = new Member();

  memberList$: Observable<[string, MemberInterface][]> | null = this.member
    .getItems$()
    .pipe(
      map((member) => {
        return Object.entries(member ?? {});
      }),
    );

  createMember(newMember: MemberInterface) {
    this.member.setItem(newMember);
  }
}

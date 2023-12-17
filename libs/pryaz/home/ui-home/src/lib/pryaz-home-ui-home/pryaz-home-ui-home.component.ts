import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MeetingInterface,
  MemberInterface,
  TaskInterface,
  Timestamp,
} from '@priminity/shared/environments/classes';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'priminity-pryaz-home-ui-home',
  standalone: true,
  imports: [CommonModule],
  template: ` <div
    class="w-full h-full -mt-16 flex flex-col justify-between text-white"
  >
    <div
      class="flex justify-center items-center w-full h-1/2 border-2 border-userColor rounded-xl mb-2"
    >
      <div class="flex items-center justify-between w-1/3">
        <div class="text-2xl">Aktuelle Member</div>
        <div class="h-14 w-1 border-r-2 border-userColor p-5"></div>
        <div class="text-2xl p-5">{{ memberCount | async }}</div>
      </div>
    </div>
    <div class="flex flex-row justify-center items-center w-full h-1/2">
      <div
        class="flex items-center justify-center w-1/3 mr-2 h-full border-2 border-userColor rounded-xl"
      >
        <div class="flex flex-col items-center justify-between w-2/3 h-1/3">
          <div>Offene Aufgaben</div>
          <div class="w-2/3 border-b-2 border-userColor"></div>
          <div>{{ taskCount | async }}</div>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-1/3 mr-2 h-full border-2 border-userColor rounded-xl"
      >
        <div class="flex flex-col items-center justify-between w-2/3 h-1/3">
          <div>Nächste Besprechung</div>
          <div class="w-2/3 border-b-2 border-userColor"></div>

          <div>{{ nextMeeting | async }}</div>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-1/3 h-full border-2 border-userColor rounded-xl"
      >
        <div class="flex flex-col items-center justify-between w-2/3 h-1/3">
          <div>Aktuelles Datum</div>
          <div class="w-2/3 border-b-2 border-userColor"></div>
          <div>{{ day }}.{{ month }}.{{ year }}</div>
          <div>{{ hours }}:{{ minutes }}:{{ seconds }} Uhr</div>
        </div>
      </div>
    </div>
  </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazHomeUiHomeComponent implements OnChanges {
  cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  timestamp = new Timestamp();

  @Input() set memberList(value: [string, MemberInterface][] | null) {
    this._memberList = value;
  }
  @Input() set taskList(value: [string, TaskInterface][] | null) {
    this._taskList = value;
  }
  @Input() set meetingList(value: [string, MeetingInterface][] | null) {
    this._meetingList = value;
  }

  get memberList(): [string, MemberInterface][] | null {
    return this._memberList;
  }
  get taskList(): [string, TaskInterface][] | null {
    return this._taskList;
  }
  get meetingList(): [string, MeetingInterface][] | null {
    return this._meetingList;
  }

  _memberList!: [string, MemberInterface][] | null;
  _taskList!: [string, TaskInterface][] | null;
  _meetingList!: [string, MeetingInterface][] | null;

  memberCount = new BehaviorSubject<number>(0);
  taskCount = new BehaviorSubject<number>(0);
  nextMeeting = new BehaviorSubject<string>('');

  year!: number;
  month!: number;
  day!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  ngOnChanges(): void {
    this.updateZeit();
    this.updateMember();
    this.updateTask();
    this.updateMeeting();
  }

  updateZeit(): void {
    const date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.cdRef.detectChanges();

    requestAnimationFrame(() => this.updateZeit());
  }

  updateMember() {
    let numberToCount = 0;
    this.memberList?.forEach((member) => {
      if (member[1].memberState === 'member') {
        numberToCount++;
      }
    });
    this.counter('member', numberToCount);
  }

  updateTask() {
    let numberToCount = 0;
    this.taskList?.forEach((task) => {
      if (task[1].status === 'open') {
        numberToCount++;
      }
      if (task[1].status === 'progress') {
        numberToCount++;
      }
    });
    this.counter('task', numberToCount);
  }

  updateMeeting() {
    let startValue = this.meetingList
      ? this.meetingList[0][1].meetingTime
      : null;

    this.meetingList?.forEach((meeting) => {
      if (meeting[1].meetingTime! >= startValue!) {
        startValue = meeting[1].meetingTime;
      }
    });
    this.nextMeeting.next(this.timestamp.getDateFromTimestamp(startValue));
  }

  counter(valueCounter: string, numberToCount: number) {
    let counter = 0;
    if (numberToCount === 0) {
      return;
    } else {
      const interval = setInterval(() => {
        counter++;
        if (valueCounter === 'member') {
          this.memberCount.next(counter);
        }
        if (valueCounter === 'task') {
          this.taskCount.next(counter);
        }
        if (counter === numberToCount) {
          clearInterval(interval);
        }
      }, 2000 / numberToCount);
    }
  }
}

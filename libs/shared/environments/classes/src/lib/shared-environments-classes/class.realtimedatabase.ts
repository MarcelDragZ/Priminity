import { inject } from '@angular/core';
import {
  Database,
  getDatabase,
  onValue,
  push,
  ref,
  set,
  limitToFirst,
  remove,
  update,
  query,
} from '@angular/fire/database';
import { Observable } from 'rxjs';

export abstract class RealtimeDatabase<TData> {
  database: Database = inject(Database);
  db: Database = getDatabase();
  dataBaseValue!: string;

  getItems$() {
    const databaseRef = ref(this.db, `${this.dataBaseValue}/`);
    // off(databaseRef); // to delete the reference to database
    return new Observable<TData>((subscriber) => {
      onValue(
        databaseRef,
        (snapshot) => {
          subscriber.next(snapshot.val());
          // subscriber.complete(); // Delete to get value once
        },
        (error) => {
          subscriber.error(error);
        },
      );
    });
  }

  getLimitedItems$() {
    const databaseRef = ref(this.db, `${this.dataBaseValue}/`);
    const limitedQuery = query(databaseRef, limitToFirst(20));
    // off(databaseRef); // to delete the reference to database
    return new Observable((subscriber) => {
      onValue(
        limitedQuery,
        (snapshot) => {
          subscriber.next(snapshot.val());
          // subscriber.complete(); // Delete to get value once
        },
        (error) => {
          subscriber.error(error);
        },
      );
    });
  }

  getSpecificItem$(databaseId: string) {
    const databaseRef = ref(this.db, `${this.dataBaseValue}/` + databaseId); // + databaseid to get specific user
    // off(databaseRef); // to delete the reference to database
    return new Observable<TData>((subscriber) => {
      onValue(
        databaseRef,
        (snapshot) => {
          subscriber.next(snapshot.val());
          // subscriber.complete(); // Delete to get value once
        },
        (error) => {
          subscriber.error(error);
        },
      );
    });
  }

  async setItem(item: TData) {
    await set(push(ref(this.db, `${this.dataBaseValue}/`)), item);
  }

  async deleteItem(databaseId: string) {
    await remove(ref(this.db, `${this.dataBaseValue}/` + databaseId));
  }

  async deleteItems() {
    await remove(ref(this.db, `${this.dataBaseValue}/`));
  }

  async updateItem(databaseId: string, item: Partial<TData>) {
    await update(ref(this.db, `${this.dataBaseValue}/` + databaseId), item);
  }

  /* CONVERT OLD DATABASE FORMAT INTO NEW

## nx g @angular/fire:ng-add --project=pryaz to add Firebase to workspace

## taskList$ = this.teamMember.getItems$().pipe(

## switchMap((task: any) =>

## task.forEach((element: TaskInterface) => {

## this.teamMember.setItem(element);

## })

## )

## );

## taskList$ = this.teamMember.getItems$().pipe(

## switchMap((tasks: TaskInterface[]) =>

## from(tasks).pipe(

## switchMap((task: TaskInterface) =>

## from(this.teamMember.setItem(task))

## )

## )

## )

## );
  //TASK MEETING
 async ngOnInit() {
    await firstValueFrom(
      this.meeting.getItems$().pipe(
        map(async (tasks) => {
          await this.meeting.deleteItems();
          const transformTasks = tasks as unknown as any[];
          transformTasks.map(async (task) => {
            const createdTime = this.timestamp.getTimestampFromDate(task.date);
            const meetingTime = this.timestamp.getTimestampFromDate(
              task.meetingDate,
            );
            const status =
              task.status === 'Abgeschlossen'
                ? 'closed'
                : task.status === 'In Bearbeitung'
                  ? 'progress'
                  : task.status === 'Offen'
                    ? 'open'
                    : 'open';

            if (task.created === 'DragZ') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-NljDN8qf4ZbRcwBxjMw',
              });
            }
            if (task.created === 's0uls1ster') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-NljD1g_XJAjTLR-dL8d',
              });
            }
            if (task.created === 'EroTec.') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-NljD2ujwHqAQg8Ko5PF',
              });
            }
            if (task.created === 'Flauschi') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-Nlk2iY45x1GMY_9WFg1',
              });
            }
            if (task.created === 'goraider') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-NlmdeCa3qByf3hCOtsv',
              });
            }
            if (task.created === 'Yakub') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-Nlmcd2rcNpRi5gXaFTj',
              });
            }
            if (task.created === 'v3x') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-NlmSrHmf3-WpmM53yt-',
              });
            }
            if (task.created === 'Sasi') {
              await this.meeting.setItem({
                ...task,
                created: null,
                date: null,
                index: null,
                createdTime: createdTime,
                meetingTime: meetingTime,
                status: status,
                creatorId: '-Nlmd0IlTGv_oZspu7Sf',
              });
            }
          });
        }),
      ),
    );
  }

  //MEMBER

  async ngOnInit() {
    await firstValueFrom(
      this.meeting.getItems$().pipe(
        map(async (tasks) => {
          await this.meeting.deleteItems();
          const transformTasks = tasks as unknown as any[];
          transformTasks.map(async (task) => {
            const createdTime = this.timestamp.getTimestampFromDate(
              task.dateVerified,
            );
            const userName = task.username;
            const countryState = task.country_state;
            const trialStateType =
              task.trial_state === 'Angenommen'
                ? 'accepted'
                : task.trial_state === 'Verlassen'
                  ? 'leaved'
                  : task.trial_state === 'Gebannt'
                    ? 'banned'
                    : task.trial_state === 'Abgelehnt'
                      ? 'rejected'
                      : task.trial_state === '-'
                        ? '-'
                        : task.trial_state === 'Trialphase'
                          ? 'trial'
                          : '-';

            let trialEndTime = null;
            if (task.dateTrialEnd) {
              trialEndTime = this.timestamp.getTimestampFromDate(
                task.dateTrialEnd,
              ); //schauen ob gültige werte !!
            }

            const trialPhases = task.trial_phases;

            const memberChangeTimes = [
              'dateAccepted',
              'dateBanned',
              'dateRejected',
              'dateExtended',
              'leaved_clan_date',
            ];
            let typeChangeTime;
            for (let key of memberChangeTimes) {
              if (task[key] !== '') {
                typeChangeTime = this.timestamp.getTimestampFromDate(task[key]);
                break;
              } else {
                typeChangeTime = this.timestamp.getTimestampFromDate(
                  task.dateVerified,
                );
              }
            }

            const memberChangeReasons = [
              'leaved_clan',
              'reasonBanned',
              'reasonRejected',
              'reasonExtended',
            ];
            let reason;
            for (let key of memberChangeReasons) {
              if (task[key] !== '') {
                console.log(task[key]);

                reason = task[key];
                break;
              } else {
                reason = '';
              }
            }

            const memberState =
              task.member_state === 'Member'
                ? 'member'
                : task.member_state === 'Trial'
                  ? 'trial'
                  : task.member_state === 'Verified'
                    ? 'verified'
                    : task.member_state === 'Gebannt'
                      ? 'banned'
                      : 'verified';

            const updateBar = task.memberUpdateBar;
            const comments = task.teamMemberComments;

            if (task.created_from === 'DragZ') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,

                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NljDN8qf4ZbRcwBxjMw',
              });
            }
            if (task.created_from === 'nox.') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NljDN8qf4ZbRcwBxjMw',
              });
            }
            if (task.created_from === 's0uls1ster') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NljD1g_XJAjTLR-dL8d',
              });
            }
            if (task.created_from === 'EroTec.') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NljD2ujwHqAQg8Ko5PF',
              });
            }
            if (task.created_from === 'rOux') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NljENZbO9Tey_HtPfLE',
              });
            }
            if (task.created_from === 'Flauschi') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-Nlk2iY45x1GMY_9WFg1',
              });
            }
            if (task.created_from === 'goraider') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NlmdeCa3qByf3hCOtsv',
              });
            }
            if (task.created_from === 'Yakub') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-Nlmcd2rcNpRi5gXaFTj',
              });
            }
            if (task.created_from === 'v3x') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NlmSrHmf3-WpmM53yt-',
              });
            }
            if (task.created_from === 'Patrick') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NlmSrHmf3-WpmM53yt-',
              });
            }
            if (task.created_from === 'Nthunter') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-Nlmdxtb-PNqjnlh4Sek',
              });
            }
            if (task.created_from === 'nthunter') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-Nlmdxtb-PNqjnlh4Sek',
              });
            }
            if (task.created_from === 'CaptainKevin') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NlmeMYCJ_RuuQbju-2B',
              });
            }
            if (task.created_from === 'Kimitrix') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-NlmdC59iZJ1Z--8rW-s',
              });
            }
            if (task.created_from === 'Sasi') {
              await this.meeting.setItem({
                ...task,

                memberUpdateBar: null,
                teamMemberComments: null,
                comments: comments,
                updateBar: updateBar,
                created_from: null,
                dateVerified: null,
                username: null,
                country_state: null,
                memberComments: null,
                memberIndex: null,
                member_state: null,
                dateAccepted: null,
                dateBanned: null,
                dateExtended: null,
                dateRejected: null,
                dateTrialEnd: null,
                dateTrialStart: null,
                leaved_clan: null,
                leaved_clan_date: null,
                reasonBanned: null,
                reasonExtended: null,
                reasonRejected: null,
                trial_state: null,
                trial_phases_extended: null,

                trialState: {
                  type: trialStateType,
                  typeChangeTime: typeChangeTime,
                  trialEndTime: trialEndTime,
                  trialPhases: trialPhases,
                  trialPhasesExtended: 0,
                  reason: reason,
                },
                createdTime: createdTime,
                userName: userName,
                countryState: countryState,
                memberState: memberState,
                creatorId: '-Nlmd0IlTGv_oZspu7Sf',
              });
            }
          });
        }),
      ),
    );
  }

  */
}

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

  async ngOnInit() {
    await firstValueFrom(
      this.task.getItems$().pipe(
        map(async (tasks) => {
          await this.task.deleteItems();
          const transformTasks = tasks as unknown as any[];
          transformTasks.map(async (task) => {
            if (task.created === 'DragZ') {
              await this.task.setItem({
                ...task,
                created: null,
                creatorId: 'kio9gfwk9e',
              });
            }
            if (task.created === 's0uls1ster') {
              await this.task.setItem({
                ...task,
                created: null,
                creatorId: 'test',
              });
            }
          });
        }),
      ),
    );
  }

  */
}

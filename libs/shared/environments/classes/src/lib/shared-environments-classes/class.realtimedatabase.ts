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
  off,
} from '@angular/fire/database';
import { Observable } from 'rxjs';
export abstract class RealtimeDatabase<TData> {
  database: Database = inject(Database);
  db: Database = getDatabase();
  dataBaseValue!: string;

  getItems$() {
    const databaseRef = ref(this.db, `${this.dataBaseValue}/`);
    off(databaseRef);
    return new Observable((subscriber) => {
      onValue(
        databaseRef,
        (snapshot) => {
          subscriber.next(snapshot.val());
          // subscriber.complete(); // Delete to get value once
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  getLimitedItems$() {
    const databaseRef = ref(this.db, `${this.dataBaseValue}/`);
    const limitedQuery = query(databaseRef, limitToFirst(20));
    off(databaseRef);
    return new Observable((subscriber) => {
      onValue(
        limitedQuery,
        (snapshot) => {
          subscriber.next(snapshot.val());
          // subscriber.complete(); // Delete to get value once
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  getSpecificItem$(databaseId: string) {
    const databaseRef = ref(this.db, `${this.dataBaseValue}/` + databaseId); // + databaseid to get specific user
    off(databaseRef);
    return new Observable((subscriber) => {
      onValue(
        databaseRef,
        (snapshot) => {
          subscriber.next(snapshot.val());
          // subscriber.complete(); // Delete to get value once
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  async setItem(item: TData) {
    await set(
      push(ref(this.db, `${this.dataBaseValue}/`)), //delte push to override the whole array
      item
    );
  }

  async setItemWithId(item: TData) {
    const memberRef = push(ref(this.db, `${this.dataBaseValue}/`));
    await set(memberRef, {
      //delte push to override the whole array
      ...item,
      id: memberRef.key,
    });
  }

  async deleteItem(databaseId: string) {
    await remove(ref(this.db, `${this.dataBaseValue}/` + databaseId));
  }

  async updateItem(databaseId: string, item: Partial<TData>) {
    await update(ref(this.db, `${this.dataBaseValue}/` + databaseId), item);
  }
}

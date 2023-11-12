import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { Firestore, getFirestore } from '@angular/fire/firestore';
// import { Database, getDatabase, onValue, push, ref, set, limitToFirst, remove, update, query, off } from '@angular/fire/database'; // replace database with firestore and getdatabase with getfirestore
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'priminity-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pryaz';
  // database: Database = inject(Database);
  // db = getDatabase();

  // constructor() {
  //   this.getRealtimeDatabaseItems();
  // }

  // getRealtimeDatabaseItems() {
  //   const memberRef = ref(this.db, 'members/'); // + databaseid to get specific user
  //   const limitedQuery = query(memberRef, limitToFirst(20)); // Limit to the first 10 items
  //   off(memberRef); // unsubscribe to previous one
  //   onValue(limitedQuery, (snapshot) => {
  //     const data = snapshot.val();
  //     /*
  //           console.log(Object.keys(data).map(key => {
  //             return ({ id: key, ...data[key] });
  //           })); */

  //     console.log(data);
  //   });

  // }

  // setRealtimeDatabaseItems() {
  //   set(push(ref(this.db, 'members/')), {  //delte push to override the whole array
  //     test: 'lol2',
  //     test2: 123,
  //   });
  // }

  // setRealtimeDatabaseItemsWithId() {
  //   const memberRef = push(ref(this.db, 'members/'));
  //   set((memberRef), { //delte push to override the whole array
  //     id: memberRef.key,
  //     test: 'lol2',
  //     test2: 123,
  //   });
  // }

  // deleteRealtimeDatabaseItems() {
  //   remove(ref(this.db, 'members/' + '-Nht8GGlHgF0nnfCnJG9'));
  // }

  // updateRealtimeDatabaseItems() {
  //   update(ref(this.db, 'members/' + '-Nht8GGlHgF0nnfCnJG9'), { // only updates the values that you want to change..
  //     age: '26',
  //   });
  // }

  // updateRealtimeDatabaseItems2() {
  //   set((ref(this.db, 'members/' + '-Nht8GGlHgF0nnfCnJG9')), // merges to an existing object and can override properties
  //     {
  //       ...{
  //         test: 'lol2',
  //         test2: 123,
  //       },
  //       ... {
  //         test3: 123,
  //       }
  //     }
  //   );
  // }
}

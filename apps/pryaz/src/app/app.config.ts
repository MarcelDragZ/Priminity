import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),

    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'bewerbungdatabase',
          appId: '1:660513347710:web:c51738652fdd2e2a8f602f',
          databaseURL:
            'https://bewerbungdatabase-default-rtdb.europe-west1.firebasedatabase.app',
          storageBucket: 'bewerbungdatabase.appspot.com',
          apiKey: 'AIzaSyBWsj1Ia2R99VU9bTW-B3Jgiets-V0aAM0',
          authDomain: 'bewerbungdatabase.firebaseapp.com',
          messagingSenderId: '660513347710',
          measurementId: 'G-ZMBPRQC1FP',
        }),
      ),
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};

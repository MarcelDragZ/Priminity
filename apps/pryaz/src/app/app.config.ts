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
    /*     importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'priminity-fd7ad',
          appId: '1:669636192905:web:446cc6e3b1666223e8f458',
          databaseURL:
            'https://priminity-fd7ad-default-rtdb.europe-west1.firebasedatabase.app',
          storageBucket: 'priminity-fd7ad.appspot.com',
          apiKey: 'AIzaSyDgFQgqazUiWuq5JkImYWsHqZ0sl-kP-Dw',
          authDomain: 'priminity-fd7ad.firebaseapp.com',
          messagingSenderId: '669636192905',
        })
      )
    ), */
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'priminity-backup',
          appId: '1:571319678723:web:a93caca339075310a0db36',
          databaseURL:
            'https://priminity-backup-default-rtdb.europe-west1.firebasedatabase.app',
          storageBucket: 'priminity-backup.appspot.com',
          apiKey: 'AIzaSyA7ImOLbs0Yg-uaKqQqQaNbINKq_kY0LFM',
          authDomain: 'priminity-backup.firebaseapp.com',
          messagingSenderId: '571319678723',
          measurementId: 'G-W0SJPXKGKJ',
        }),
      ),
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};

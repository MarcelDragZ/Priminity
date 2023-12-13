import { Route } from '@angular/router';
import { ActiveRouteIdResolver } from '@priminity/shared/resolvers/active-teammember-resolver';

export const PryazMeetingRoutes: Route[] = [
  {
    path: 'list',
    loadComponent: () =>
      import('@priminity/pryaz/meeting/feature-list').then(
        (m) => m.PryazMeetingFeatureListComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('@priminity/pryaz/meeting/feature-detail').then(
        (m) => m.PryazMeetingFeatureDetailComponent
      ),
    resolve: {
      activeRouteId: ActiveRouteIdResolver,
    },
  },
  {
    path: 'create',
    loadComponent: () =>
      import('@priminity/pryaz/meeting/feature-create').then(
        (m) => m.PryazMeetingFeatureCreateComponent
      ),
  },
  { path: '**', redirectTo: 'list' },
];

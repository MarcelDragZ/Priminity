import { Route } from '@angular/router';
import { ActiveRouteIdResolver } from '@priminity/shared/resolvers/active-teammember-resolver';

export const PryazTeammemberRoutes: Route[] = [
  {
    path: 'list',
    loadComponent: () =>
      import('@priminity/pryaz/teammember/feature-list').then(
        (m) => m.PryazTeammemberFeatureListComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('@priminity/pryaz/teammember/feature-detail').then(
        (m) => m.PryazTeammemberFeatureDetailComponent
      ),
    resolve: {
      activeRouteId: ActiveRouteIdResolver,
    },
  },
  {
    path: 'create',
    loadComponent: () =>
      import('@priminity/pryaz/teammember/feature-create').then(
        (m) => m.PryazTeammemberFeatureCreateComponent
      ),
  },
  { path: '**', redirectTo: 'list' },
];

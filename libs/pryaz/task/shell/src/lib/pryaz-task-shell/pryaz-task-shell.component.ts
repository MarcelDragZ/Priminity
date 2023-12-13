import { Route } from '@angular/router';
import { ActiveRouteIdResolver } from '@priminity/shared/resolvers/active-teammember-resolver';

export const PryazTaskRoutes: Route[] = [
  {
    path: 'list',
    loadComponent: () =>
      import('@priminity/pryaz/task/feature-list').then(
        (m) => m.PryazTaskFeatureListComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('@priminity/pryaz/task/feature-detail').then(
        (m) => m.PryazTaskFeatureDetailComponent
      ),
    resolve: {
      activeRouteId: ActiveRouteIdResolver,
    },
  },
  {
    path: 'create',
    loadComponent: () =>
      import('@priminity/pryaz/task/feature-create').then(
        (m) => m.PryazTaskFeatureCreateComponent
      ),
  },
  { path: '**', redirectTo: 'list' },
];

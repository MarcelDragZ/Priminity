import { Route } from '@angular/router';
import { ActiveRouteIdResolver } from '@priminity/shared/resolvers/active-teammember-resolver';

export const PryazMemberRoutes: Route[] = [
  {
    path: 'list',
    loadComponent: () =>
      import('@priminity/pryaz/member/feature-list').then(
        (m) => m.PryazMemberFeatureListComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('@priminity/pryaz/member/feature-detail').then(
        (m) => m.PryazMemberFeatureDetailComponent
      ),
    resolve: {
      activeRouteId: ActiveRouteIdResolver,
    },
  },
  {
    path: 'create',
    loadComponent: () =>
      import('@priminity/pryaz/member/feature-create').then(
        (m) => m.PryazMemberFeatureCreateComponent
      ),
  },
  { path: '**', redirectTo: 'list' },
];

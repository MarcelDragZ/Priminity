import { Route } from '@angular/router';
import { AdminLoggedInAuthGuard } from '@priminity/shared/auth-guards/admin-logged-in-auth-guard';
import { SupervisorLoggedInAuthGuard } from '@priminity/shared/auth-guards/supervisor-logged-in-auth-guard';
import { HeadModLoggedInAuthGuard } from '@priminity/shared/auth-guards/head-mod-logged-in-auth-guard';
import { ManagerLoggedInAuthGuard } from '@priminity/shared/auth-guards/manager-logged-in-auth-guard';
import { ModLoggedInAuthGuard } from '@priminity/shared/auth-guards/mod-logged-in-auth-guard';
import { LoggedInAuthGuard } from '@priminity/shared/auth-guards/logged-in-auth-guard';
import {
  ActiveRouteIdResolver,
  TeamMemberRedirectHomeResolver,
} from '@priminity/shared/resolvers/active-teammember-resolver';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('@priminity/pryaz/login/feature-login').then(
        (m) => m.PryazLoginFeatureLoginComponent,
      ),
    resolve: {
      redirectHome: TeamMemberRedirectHomeResolver,
    },
  },
  {
    path: 'registry',
    loadComponent: () =>
      import('@priminity/pryaz/registry/feature-registry').then(
        (m) => m.PryazRegistryFeatureRegistryComponent,
      ),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('@priminity/pryaz/forgot-password/feature-forgot-password').then(
        (m) => m.PryazForgotPasswordFeatureForgotPasswordComponent,
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@priminity/pryaz/home/feature-home').then(
        (m) => m.PryazHomeFeatureHomeComponent,
      ),
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: 'profile/:id',
    loadComponent: () =>
      import('@priminity/pryaz/profile/feature-profile').then(
        (m) => m.PryazProfileFeatureProfileComponent,
      ),
    resolve: {
      activeRouteId: ActiveRouteIdResolver,
    },
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: 'teammember',
    loadChildren: () =>
      import('@priminity/pryaz/teammember/shell').then(
        (m) => m.PryazTeammemberRoutes,
      ),
    canActivate: [LoggedInAuthGuard, HeadModLoggedInAuthGuard],
  },
  {
    path: 'member',
    loadChildren: () =>
      import('@priminity/pryaz/member/shell').then((m) => m.PryazMemberRoutes),
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: 'task',
    loadChildren: () =>
      import('@priminity/pryaz/task/shell').then((m) => m.PryazTaskRoutes),
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: 'meeting',
    loadChildren: () =>
      import('@priminity/pryaz/meeting/shell').then(
        (m) => m.PryazMeetingRoutes,
      ),
    canActivate: [LoggedInAuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];

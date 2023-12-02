import { Route } from '@angular/router';
import { AdminLoggedInAuthGuard } from '@priminity/shared/auth-guards/admin-logged-in-auth-guard';
import { LoggedInAuthGuard } from '@priminity/shared/auth-guards/logged-in-auth-guard';
import { TeamMemberRedirectHomeResolver } from '@priminity/shared/resolvers/active-teammember-resolver';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('@priminity/pryaz/login/feature-login').then(
        (m) => m.PryazLoginFeatureLoginComponent
      ),
    resolve: {
      redirectHome: TeamMemberRedirectHomeResolver,
    },
  },
  {
    path: 'registry',
    loadComponent: () =>
      import('@priminity/pryaz/registry/feature-registry').then(
        (m) => m.PryazRegistryFeatureRegistryComponent
      ),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('@priminity/pryaz/forgot-password/feature-forgot-password').then(
        (m) => m.PryazForgotPasswordFeatureForgotPasswordComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@priminity/pryaz/home/feature-home').then(
        (m) => m.PryazHomeFeatureHomeComponent
      ),
  },
  {
    path: 'teammember',
    loadChildren: () =>
      import('@priminity/pryaz/teammember/shell').then(
        (m) => m.PryazTeammemberRoutes
      ),
  },
  { path: '**', redirectTo: 'login' },
];

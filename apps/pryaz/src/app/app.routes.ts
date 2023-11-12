import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('@priminity/pryaz/login/feature-login').then(m => m.PryazLoginFeatureLoginComponent)
  },
  {
    path: 'registry',
    loadComponent: () => import('@priminity/pryaz/registry/feature-registry').then(m => m.PryazRegistryFeatureRegistryComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('@priminity/pryaz/forgot-password/feature-forgot-password').then(m => m.PryazForgotPasswordFeatureForgotPasswordComponent)
  },
  { path: '**', redirectTo: '' }
];

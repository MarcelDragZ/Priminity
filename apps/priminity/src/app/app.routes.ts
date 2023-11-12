import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('@priminity/priminity/home/feature-home').then(m => m.PriminityHomeFeatureHomeComponent)
  },
  {
    path: 'teammembers',
    loadComponent: () => import('@priminity/priminity/teammembers/feature-teammembers').then(m => m.PriminityTeammembersFeatureTeammembersComponent)
  },
  {
    path: 'teams',
    loadComponent: () => import('@priminity/priminity/teams/feature-teams').then(m => m.PriminityTeamsFeatureTeamsComponent)
  },
  {
    path: 'logos',
    loadComponent: () => import('@priminity/priminity/logos/feature-logos').then(m => m.PriminityLogosFeatureLogosComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('@priminity/priminity/news/feature-news').then(m => m.PriminityNewsFeatureNewsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('@priminity/priminity/contact/feature-contact').then(m => m.PriminityContactFeatureContactComponent)
  },
  {
    path: 'imprint',
    loadComponent: () => import('@priminity/priminity/imprint/feature-imprint').then(m => m.PriminityImprintFeatureImprintComponent)
  },
  {
    path: 'dataprotection',
    loadComponent: () => import('@priminity/priminity/dataprotection/feature-dataprotection').then(m => m.PriminityDataprotectionFeatureDataprotectionComponent)
  },
  {
    path: 'rules',
    loadComponent: () => import('@priminity/priminity/rules/feature-rules').then(m => m.PriminityRulesFeatureRulesComponent)
  },
  { path: '**', redirectTo: 'home' }
];

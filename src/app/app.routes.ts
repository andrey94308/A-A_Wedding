import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'invite/:uuid',
    loadComponent: () => import('./pages/invite/invite.component').then((m) => m.InviteComponent),
  },
  {
    path: 'invite/:uuid/program',
    loadComponent: () => import('./pages/program-page/program-page.component').then((m) => m.ProgramPageComponent),
  },
  {
    path: 'invite/:uuid/updates',
    loadComponent: () => import('./pages/updates-page/updates-page.component').then((m) => m.UpdatesPageComponent),
  },
  {
    path: 'invite/:uuid/dress-code',
    loadComponent: () => import('./pages/dress-code-page/dress-code-page.component').then((m) => m.DressCodePageComponent),
  },
  {
    path: '',
    redirectTo: 'invite/demo-guest',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'invite/demo-guest',
  },
];

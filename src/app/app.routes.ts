import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'invite/:uuid',
    loadComponent: () => import('./pages/invite/invite.component').then((m) => m.InviteComponent),
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

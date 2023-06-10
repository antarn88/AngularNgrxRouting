import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'statistics',
    loadChildren: () => import('./modules/statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

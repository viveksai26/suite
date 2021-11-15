import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from './core/layout/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/layout/layout.module').then((m) => m.LayoutModule),
    // canActivate: [AuthGuardService]
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

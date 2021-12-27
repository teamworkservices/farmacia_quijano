import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutfullComponent } from './layout/layoutfull/layoutfull.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    children: [
      {
        path: 'pages',
        component: LayoutfullComponent,
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

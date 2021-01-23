import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from './guards/token.guard';
import { LoginComponent } from './pages/login/login.component';
import { PaginaNaoEncontradaComponent } from './shared/components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'p',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [TokenGuard]
  },
  {
    path: 's',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

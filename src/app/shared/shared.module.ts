import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoExpiradaComponent } from './components/sessao-expirada/sessao-expirada.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {
    path: 'sessao-expirada',
    component: SessaoExpiradaComponent
  }
];

@NgModule({
  declarations: [SessaoExpiradaComponent, PaginaNaoEncontradaComponent, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedModule { }

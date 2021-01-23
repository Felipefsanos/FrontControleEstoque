import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoExpiradaComponent } from './components/sessao-expirada/sessao-expirada.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessao-expirada',
    pathMatch: 'full'
  },
  {
    path: 'sessao-expirada',
    component: SessaoExpiradaComponent
  }
];

@NgModule({
  declarations: [SessaoExpiradaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ],
  exports: []
})
export class SharedModule { }

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoExpiradaComponent } from './components/sessao-expirada/sessao-expirada.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
  {
    path: 'sessao-expirada',
    component: SessaoExpiradaComponent
  }
];

@NgModule({
  declarations: [SessaoExpiradaComponent, PaginaNaoEncontradaComponent, LoadingComponent, FormularioClienteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    NgbTooltipModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    LoadingComponent,
    FormularioClienteComponent,
    NgxMaskModule
  ]
})
export class SharedModule { }

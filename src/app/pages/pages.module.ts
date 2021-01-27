import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'novo-cliente',
    component: NovoClienteComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    NovoClienteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class PagesModule { }

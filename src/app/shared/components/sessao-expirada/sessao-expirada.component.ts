import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessao-expirada',
  templateUrl: './sessao-expirada.component.html',
  styleUrls: ['./sessao-expirada.component.scss']
})
export class SessaoExpiradaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateLogin(): void {
    debugger;
    this.router.navigate(['']);
  }

}

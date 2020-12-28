import { TokenModel } from './../../models/login/token.model';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario(): void {
    this.formulario = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(8)]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  realizarLogin(): void {
    debugger;
    if (this.formulario.invalid) {
      return;
    }

    this.loginService.login(this.formulario.value)
      .subscribe(resp => {
        console.log(resp);
        debugger;
      });

  }

  get loginControl(): AbstractControl { return this.formulario.get('login'); }
  get senhaControl(): AbstractControl { return this.formulario.get('senha'); }

}

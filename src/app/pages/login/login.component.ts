import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenModel } from 'src/app/models/login/token.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ToastrService]
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private toastrService: ToastrService,
              private router: Router) { }

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
    if (this.formulario.invalid) {
      return;
    }

    this.loginService.login(this.formulario.value)
    .subscribe((resp: TokenModel) => {
        this.loginService.saveToken(resp);
        this.toastrService.info('Usuário Logado');
        this.router.navigate(['p/home']);
     });

  }

  get loginControl(): AbstractControl { return this.formulario.get('login'); }
  get senhaControl(): AbstractControl { return this.formulario.get('senha'); }

}

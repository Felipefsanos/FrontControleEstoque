import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../services/cep.service';
import { NumberValidator } from '../../Utils/Validators/number-validator';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {

  formulario: FormGroup;


  constructor(private formBuilder: FormBuilder, private cepService: CepService) {
    this.construirFormulario();
  }

  ngOnInit(): void {

  }

  construirFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf:  ['', [Validators.required, NumberValidator.isValidCpf()]],
      email: ['', Validators.email],
      telefone: this.formBuilder.array([{
        numeroTelefone: ['']
      }]),
      endereco: this.formBuilder.group({
        CEP: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        logradouro: ['', [Validators.required]],
        numero: [''],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      })
    });
  }

  buscarCep(cep: string) {
    const cepNumber = cep.replace('-', '');

    if (cepNumber.length < 8){
      return;
    }

    this.cepService.consultarCep(+cepNumber)
        .subscribe(resp => {
          console.log(resp);
        });
  }

}

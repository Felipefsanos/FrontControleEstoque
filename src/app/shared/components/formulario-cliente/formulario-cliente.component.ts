import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CepService } from '../../services/cep.service';
import { NumberValidator } from '../../utils/validators/number-validator';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {

  formulario: FormGroup;

  mascaraEmailNgxMask = { ' 0 ' : { pattern : new RegExp ( ' \ [ a-zA-Z \] ' ) } } ;


  constructor(private formBuilder: FormBuilder, private cepService: CepService) {
    this.construirFormulario();
  }

  ngOnInit(): void {

  }

  construirFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, NumberValidator.isValidCpf()]],
      email: ['', Validators.email],
      telefones: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ]),
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
    if (cep === '_____-___') { // Valor da máscara do CEP
      return;
    }
    const cepNumber = cep.replace('-', '');

    if (cepNumber.length < 8) {
      return;
    }

    this.cepService.consultarCep(+cepNumber)
      .subscribe(resp => {

        if (resp.erro && resp.erro === true) {
          this.endereco.get('CEP').setErrors({ cepInvalido: true });
        }
        console.log(resp);
      });
  }

  adicionarTelefone(): void {
    this.telefones.push(this.formBuilder.control('', Validators.required));
  }

  removerTelefone(): void {
    this.telefones.removeAt(this.telefones.length - 1);
  }

  showRequiredError(formControl: AbstractControl, element: HTMLElement): void {
    if (formControl.hasError('required')) {
      element.classList.add('is-invalid');
    }
  }

  showFormValue() {
    console.log(this.formulario);
  }

  get telefones(): FormArray {
    return this.formulario.get('telefones') as FormArray;
  }

  get endereco(): FormGroup {
    return this.formulario.get('endereco') as FormGroup;
  }

}

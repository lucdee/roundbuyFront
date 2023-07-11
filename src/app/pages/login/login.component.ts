import { Component, OnInit , HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  meuFormulario!: FormGroup;
  isTelaPequena: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isTelaPequena = window.innerWidth <= 2200;
  }
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    this.meuFormulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Adicione mais campos ao seu formulário, se necessário
    });
  }



  enviarDados() {
    if (this.meuFormulario.invalid) {
      return;
    }

   


    //pegando valores do form
    const { nome, email } = this.meuFormulario?.value;


     // Montando os dados para envio com teste concatenando as 2 variaveis
     const dados = {
      email,
      teste : email + nome
    }

    // Realize a requisição HTTP para enviar os dados
    this.http.post(`URL_DA_API`, dados)
      .subscribe(
        response => {
          console.log('Dados enviados com sucesso!', response);
          // Realize as ações necessárias após o envio bem-sucedido
        },
        error => {
          console.error('Erro ao enviar dados:', error);
          // Realize as ações necessárias em caso de erro no envio
        }
      );
  }
}



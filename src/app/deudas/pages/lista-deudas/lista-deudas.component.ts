import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deuda } from '../../interfaces/deudas.interface';
import { ApiRestService } from '../../services/api-rest.service';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-lista-deudas',
  templateUrl: './lista-deudas.component.html',
  styleUrls: ['./lista-deudas.component.css']
})
export class ListaDeudasComponent implements OnInit {

  deudas!:Deuda[];
  personas!:Persona[];
  ciForm: FormGroup;
  constructor(private apiRestService: ApiRestService,private formBuilder:FormBuilder) { 
    this.ciForm = this.formBuilder.group({
      ci: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {

  }
  buscarPersona(){
    console.log();
      if (this.ciForm.valid) {
        this.apiRestService.buscarPersonaPorCi(this.ciForm.value.ci).subscribe(res =>{
          this.personas = res;
          this.apiRestService.deudaPorIdUsuario(this.personas[0].id!).subscribe(deudas => {
              this.deudas = deudas;
          })
        })
      }else{
        console.log("Formulario Invalido");
      }
  }

}

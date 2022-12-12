import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deuda } from '../../interfaces/deudas.interface';
import { Persona } from '../../interfaces/persona.interface';
import { ApiRestService } from '../../services/api-rest.service';
import { Pago } from '../../interfaces/Pago.interface';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

   deudas!:Deuda[];
   personas!:Persona[];
  pago!:Pago;
  ciForm: FormGroup;
  constructor(private apiRestService: ApiRestService,private formBuilder:FormBuilder) { 
    this.ciForm = this.formBuilder.group({
      ci: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  getDetallePago(id:number){
    this.apiRestService.getPago(id).subscribe(pago => {
      this.pago = pago;
    });
  }

  buscarPersona(){
      if (this.ciForm.valid) {
        this.apiRestService.buscarPersonaPorCi(this.ciForm.value.ci).subscribe(res =>{
          this.personas = res;
          this.apiRestService.deudaPagadaUsuario(this.personas[0].id!).subscribe(deudas => {
              this.deudas = deudas;
          })
        })
      }else{
        console.log("Formulario Invalido");
      }
  }

}

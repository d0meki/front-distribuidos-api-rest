import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Deuda } from '../../interfaces/deudas.interface';
import { ApiRestService } from '../../services/api-rest.service';
import { Persona } from '../../interfaces/persona.interface';
import { DetalleDeuda } from '../../interfaces/detalleDeuda.interface';
import { Router } from '@angular/router';
import { DeudaCI } from '../../interfaces/DeudaCi.interface';
import { Detalle } from '../../interfaces/Detalle.interface';

@Component({
  selector: 'app-lista-deudas',
  templateUrl: './lista-deudas.component.html',
  styleUrls: ['./lista-deudas.component.css']
})
export class ListaDeudasComponent implements OnInit {

  deudas!:Deuda[];
  deudasci!:DeudaCI[];
  personas!:Persona[];
  ciForm: FormGroup;
  detalleDeuda!:DetalleDeuda[];
  detalleDeudaConcepto!:Detalle[];
  constructor(private apiRestService: ApiRestService,private formBuilder:FormBuilder,private router: Router) { 
    this.ciForm = this.formBuilder.group({
      ci: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {

  }
  getDetalles(id:number){
    // this.detalleDeuda = [];
    // this.apiRestService.getDetalleDeuda(id).subscribe(detalles => {
    //   this.detalleDeuda = detalles;
    // })

    this.detalleDeudaConcepto = [];
    this.apiRestService.getDetalleDeudaConcepto(id).subscribe(d => {
      this.detalleDeudaConcepto = d;
    })
  }
  pagar(persona_id:number,deuda_id:number,monto:number){
    let fecha = new Date();
    const pago = {
      fecha_pago: new Date,
      deuda_id:deuda_id,
      persona_id:persona_id,
      monto:monto
    }
    const deuda = {
      id:deuda_id,
      pagado:true
    }
    const pagar = {
      pago,
      deuda
    }
    console.log(pago);
    
    this.apiRestService.realizarPago(pagar).subscribe(r => {
      console.log(r);
      this.router.navigate(['/deudas/pagos'])
    })
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
  buscarDeudaPorCi(){
    if (this.ciForm.valid) {
      this.apiRestService.deudaPorCi(this.ciForm.value.ci).subscribe(response => {
        this.deudasci = response;
        console.log(this.deudasci);
      })
    }
  }


  formatDate(date:Date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

}

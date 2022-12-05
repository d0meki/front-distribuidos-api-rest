import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiRestService } from '../../services/api-rest.service';

@Component({
  selector: 'app-crear-deudas',
  templateUrl: './crear-deudas.component.html',
  styleUrls: ['./crear-deudas.component.css']
})
export class CrearDeudasComponent implements OnInit {
  isVisible:boolean = false;
  deudaForm:FormGroup;
  constructor(private apiRestService: ApiRestService,private formBuilder:FormBuilder) { 
    this.deudaForm = this.formBuilder.group({
      fecha_creacion: ['',[Validators.required]],
      fecha_vencimiento: ['',Validators.required],
      pagado: false,
      persona_id: ['',Validators.required],
      titulo: ['',Validators.required],
      total:0,
    })
  }

  ngOnInit(): void {
  }

  abrirModal(){
    this.isVisible = true;
   }
   cerrarModa(){
    this.isVisible = false;
   }
   registrarDeuda(){
      console.log(this.deudaForm);
      
      if (this.deudaForm.valid) {
        console.log(this.deudaForm.value);
      }
   }
}

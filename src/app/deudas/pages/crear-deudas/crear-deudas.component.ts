import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { DetalleDeuda } from '../../interfaces/detalleDeuda.interface';
import { Deuda } from '../../interfaces/deudas.interface';
import { ApiRestService } from '../../services/api-rest.service';

@Component({
  selector: 'app-crear-deudas',
  templateUrl: './crear-deudas.component.html',
  styleUrls: ['./crear-deudas.component.css']
})
export class CrearDeudasComponent implements OnInit {
  isVisible: boolean = false;
  deudaForm: FormGroup;
  deudas!: Deuda[];
  constructor(private apiRestService: ApiRestService, private formBuilder: FormBuilder) {
    this.deudaForm = this.formBuilder.group({
      fecha_creacion: [new Date, [Validators.required]],
      fecha_vencimiento: [new Date, Validators.required],
      pagado: false,
      persona_id: [0, Validators.required],
      titulo: ['', Validators.required],
      total: 0,
      detalle: new FormArray([], Validators.required)
    })
  }
  initFormDetalle(): FormGroup {
    return new FormGroup({
      concepto_id: new FormControl(''),
      monto: new FormControl(0),
    });
  }
  addDetalles(): void {
    const refDetalle = this.deudaForm.get('detalle') as FormArray;
    refDetalle.push(this.initFormDetalle());
  }

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key);
  }

  ngOnInit(): void {
  
  }

  getDeudas() {
    console.log("Precioné boton de ver Deudas");

    this.apiRestService.listaDeuda().subscribe(res => {
      this.deudas = res;
      console.log(this.deudas);
    })
  }
  registrarDeuda() {
    if (this.deudaForm.valid) {
      this.deudaForm.value.total = this.totalDeuda();

      // this.apiRestService.crearDeuda(this.deudaForm.value).subscribe(response => {
      //   console.log(response);
      //   this.deudaForm.value.detalle.forEach((detalle: DetalleDeuda,i:number) => {
      //     detalle.deuda_id = response.id;
      //     setTimeout(() => {
      //       this.apiRestService.crearDetalleDeuda(detalle).subscribe(respuesta => {
      //         console.log(respuesta);
      //       })
      //     }, i * 3000);
      //   })
      // })

      console.log(this.deudaForm.value);
      
    }
  }

  totalDeuda():number{
    let total = 0;
    this.deudaForm.value.detalle.forEach((detalle: DetalleDeuda,i:number) => {
      total += detalle.monto!;
    })
    return total;
  }
}

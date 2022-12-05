import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiRestService } from '../../services/api-rest.service';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  isVisible:boolean = false;
  personForm: FormGroup;
  personas!:Persona[];
  id:number | undefined;
  constructor(private apiRestService: ApiRestService,private formBuilder:FormBuilder) {
    this.id = -1;
    this.personForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      telefono: ['',Validators.required],
    })
   }
   abrirModal(){
    this.isVisible = true;
   }
   cerrarModa(){
    this.isVisible = false;
   }
 
  ngOnInit(): void {
    // this.apiRestService.listarPersonas().subscribe(res => {
    //     this.personas = res;
    // })
  }

  registrarPersona(){

    
    
    if (this.personForm.valid && this.id === -1) {
      // this.apiRestService.registrarPersona(this.personForm.value).subscribe(res => {
      //   this.personas.push(res);
      // });
    }else{
       console.log('Llamar al servicio y editar: ',this.id);
       
    }
    
    this.cerrarModa();
  }

  editarPersona(id:number | undefined){
    this.id = id;
    console.log(this.id);
    this.abrirModal();
  }

}

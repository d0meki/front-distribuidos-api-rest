import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Deuda } from '../../interfaces/deudas.interface';
import { ApiRestService } from '../../services/api-rest.service';

@Component({
  selector: 'app-lista-deudas',
  templateUrl: './lista-deudas.component.html',
  styleUrls: ['./lista-deudas.component.css']
})
export class ListaDeudasComponent implements OnInit {

  deudas!: Deuda[];
  constructor(private apiRestService: ApiRestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.apiRestService.listarDeudas().subscribe(res => {
      this.deudas = res;
    })
  }

}

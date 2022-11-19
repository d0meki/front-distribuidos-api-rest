import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../services/api-rest.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  saludo!:string;
  constructor(private apiRestService: ApiRestService) { }

  ngOnInit(): void {
    this.saludo = this.apiRestService.saludar();
  }

}

import { Component, OnInit } from '@angular/core';
import { DespesasService, Senador } from '../despesas.service';

@Component({
  selector: 'app-senadores',
  templateUrl: './senadores.component.html',
  styleUrls: ['./senadores.component.css']
})
export class SenadoresComponent implements OnInit {

  constructor(private despesasService: DespesasService) { }
  senadores: Senador[] = [];

  ngOnInit(): void {
    this.despesasService.buscaSenadores().subscribe(senadores => {
      this.senadores = senadores;
    });
  }

}

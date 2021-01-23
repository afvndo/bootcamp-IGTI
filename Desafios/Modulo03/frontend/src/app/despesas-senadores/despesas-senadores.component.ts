import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DespesasService, Despesa } from '../despesas.service';

@Component({
  selector: 'app-despesas-senadores',
  templateUrl: './despesas-senadores.component.html',
  styleUrls: ['./despesas-senadores.component.css']
})
export class DespesasSenadoresComponent implements OnInit {

  nomeSenador: string = '';
  despesas: Despesa[] = [];
  despesasPorTipo: { tipo: number, total: number }[] = [];

  constructor(private route: ActivatedRoute, private despesasService: DespesasService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'));
      this.despesasService.buscaDespesasSenador(id).subscribe(despesasSenador => {
        this.nomeSenador = despesasSenador.nomeSenador;
        this.despesas = despesasSenador.despesas;
        this.despesasPorTipo = calculaDespesasPorTipo(this.despesas);
      })
    });
  }

  calculaTotal(): number {
    return this.despesasPorTipo.reduce((total, item) => total + item.total, 0);
  }
}

function calculaDespesasPorTipo(despesas: Despesa[]) {
  let resultado: { tipo: number, total: number }[] = [];
  for (let i = 1; i <= 7; i++) {
    const valorTotal = despesas
      .filter(d => d.tipo === i)
      .reduce((total, despesa) => total + despesa.valor, 0);
    resultado[i - 1] = { tipo: i, total: valorTotal };
  }
  return resultado;
}

import { Pipe, PipeTransform } from '@angular/core';
import { DespesasService } from './despesas.service';

@Pipe({
  name: 'descTipo'
})
export class DescTipoPipe implements PipeTransform {

  constructor(private despesasService: DespesasService) { }

  transform(value: number): unknown {
    return this.despesasService.formataTipo(value);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Senador {
  id: number;
  nomeSenador: string;
}

export interface Despesa {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}

export interface DespesasSenador {
  id: number;
  nomeSenador: string;
  despesas: Despesa[];
}

export const tipos = {
  1: "Aluguel de imóveis e despesas concernentes a eles",
  2: "Divulgação da atividade parlamentar",
  3: "Aquisição de material de consumo para uso no escritório",
  4: "Passagens aéreas, aquáticas e terrestres nacionais",
  5: "Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços",
  6: "Locomoção, hospedagem, alimentação e combustíveis",
  7: "Serviços de Segurança Privada"
};

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private http: HttpClient) { }

  buscaDespesasSenador(id: number) {
    return this.http.get<DespesasSenador>(`${urlBase}/despesasSenadores/${id}`)
  }

  buscaSenadores() {
    return this.http.get<Senador[]>(`${urlBase}/senadores`)
  }

  formataTipo(tipo: number): string {
    return tipos[tipo];
  }
}

import {Servico} from './services'

type ServicoPerfomed ={
  id_servico: string;
  id_barbeiro: string | null;
  nomeDoCliente: string;
  descricaoDoServicoRealizado: string;
  metodoDePagamento: string;
  data: string;
  hora: string;
}

export {ServicoPerfomed};
import {ServicoPerfomed} from './servicesPerfomed';

type Barbeiro ={
    id?: string;
    nome: string;
    email: string;
    telefone: string;
    dataIngresso: string;
    dataSaida?: string;
    especialidades: string[];
    servicosRealizados: ServicoPerfomed[];
    ativo: boolean;
}

export {Barbeiro};
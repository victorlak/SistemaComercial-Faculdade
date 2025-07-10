import ServicoPerfomed from './servicesPerfomed';

type Barbeiro ={
    nome: string;
    email: string;
    telefone: string;
    dataIngresso: string;
    dataSaida: string;
    especialidades: string[];
    servicosRealizados: ServicoPerfomed[];
    
}

export {Barbeiro};
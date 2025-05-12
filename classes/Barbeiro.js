import { Pessoa } from "./Pessoa";

class Barbeiro extends Pessoa {
    constructor(nome, cpf, dataNascimento, telefone, sexo, email, senha) {
        super(nome, cpf, dataNascimento, telefone, sexo, email, senha);
        this.horarioServico = null;
        this.baiaTrabalho = null;
        this.valorCortes = []; 
        this.formasPagamento = null;
        this.agenda = []; 
    }

    setDataNascimento = (dataNascimento) => { this.dataNascimento = dataNascimento; }
    getDataNascimento = () => { return this.dataNascimento; }

    setHorarioServico = (horarioServico) => { this.horarioServico = horarioServico; }
    getHorarioServico = () => { return this.horarioServico; }

    setBaiaTrabalho = (baiaTrabalho) => { this.baiaTrabalho = baiaTrabalho; }
    getBaiaTrabalho = () => { return this.baiaTrabalho; }

    setValorCortes = (valorCortes) => { this.valorCortes = valorCortes; }
    getValorCortes = () => { return this.valorCortes; }

    addValorCorte = (corte) => { this.valorCortes.push(corte); }

    setFormasPagamento = (formasPagamento) => { this.formasPagamento = formasPagamento; }
    getFormasPagamento = () => { return this.formasPagamento; }

    setAgenda = (agenda) => { this.agenda = agenda; }
    getAgenda = () => { return this.agenda; }

    adicionarAgendamento = (agendamento) => { this.agenda.push(agendamento); }
}

export { Barbeiro };

import { Pessoa } from "./Pessoa";

class Administrador extends Pessoa {
    constructor(nome, cpf, dataNascimento, telefone, sexo, email, senha){
        super(nome, cpf, dataNascimento, telefone, sexo, email, senha)
        this.nomeBarbearia = null;

    }
    setDataNascimento = (dataNascimento) => {this.dataNascimento = dataNascimento}
    getDataNascimento = () => {return this.dataNascimento}

    setNomeBarbearia = (nomeBarbearia) => { this.nomeBarbearia = nomeBarbearia; }
    getNomeBarbearia = () => { return this.nomeBarbearia; }
}

export {Administrador}
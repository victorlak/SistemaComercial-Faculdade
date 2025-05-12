class Barbearia {
    constructor(nome, cnpj, endereco, horarioFuncionamento, telefoneContato, dono, numeroBaias, valorComissao) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.horarioFuncionamento = horarioFuncionamento;
        this.telefoneContato = telefoneContato;
        this.dono = dono; 
        this.barbeiros = []; 
        this.numeroBaias = numeroBaias;
        this.valorComissao = valorComissao; 
    }

    setNome = (nome) => { this.nome = nome; }
    getNome = () => { return this.nome; }

    setCnpj = (cnpj) => { this.cnpj = cnpj; }
    getCnpj = () => { return this.cnpj; }

    setEndereco = (endereco) => { this.endereco = endereco; }
    getEndereco = () => { return this.endereco; }

    setHorarioFuncionamento = (horario) => { this.horarioFuncionamento = horario; }
    getHorarioFuncionamento = () => { return this.horarioFuncionamento; }

    setTelefoneContato = (telefone) => { this.telefoneContato = telefone; }
    getTelefoneContato = () => { return this.telefoneContato; }

    setDono = (dono) => { this.dono = dono; }
    getDono = () => { return this.dono; }

    setNumeroBaias = (numero) => { this.numeroBaias = numero; }
    getNumeroBaias = () => { return this.numeroBaias; }

    setValorComissao = (comissao) => { this.valorComissao = comissao; }
    getValorComissao = () => { return this.valorComissao; }

    adicionarBarbeiro = (barbeiro) => { this.barbeiros.push(barbeiro); }
    getBarbeiros = () => { return this.barbeiros; }

    removerBarbeiro = (cpf) => {
        this.barbeiros = this.barbeiros.filter(barbeiro => barbeiro.getCpf() !== cpf);
    }
}

export { Barbearia };
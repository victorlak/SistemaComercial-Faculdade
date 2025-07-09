import { PerfisUsuario } from './utils/ProfilesUserTypes';
export class Usuario {
    private name : string;
    private email : string;
    private perfis : PerfisUsuario[];
    private senha? : string;

    constructor(name: string, email: string, perfis: PerfisUsuario[] , senha?: string){
        this.name = name;
        this.email = email;
        this.perfis = perfis;
        this.senha = senha;
    }
    //getters and setters
    public getEmail(){
        return this.email;
    }
    public getPerfis(){
        return this.perfis;
    }
    public getSenha(){
        return this.senha;
    }
    public setName(name: string){
        this.name = name;
    }
    public getPerfisSt(){
        return this.perfis
    }
    
}
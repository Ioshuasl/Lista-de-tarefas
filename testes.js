import { Servico } from "./servico.js"
import { LoteSelo } from "./loteselo.js"

class Teste{
    constructor(){
        this.servicos = []
        this.lotesSelo = []
    }

    createServico(idServico,nomeServico,nomeApresentante,valorServico,seloServico){
        const servico = new Servico(idServico,nomeServico,nomeApresentante,valorServico,seloServico)
        this.servicos.push(servico)
        return servico
    }

    createLoteSelos(numeroPedido,tipoAto,quantidadeSelos){
        let loteSelo = new LoteSelo(numeroPedido,tipoAto,quantidadeSelos).gerarSelos(numeroPedido,tipoAto,quantidadeSelos)
        loteSelo.concat(this.lotesSelo)
        return loteSelo
    }

    selarServico(tipoAto){
        this.lotesSelo.filter()
    }
}

let testes = new Teste()
testes.createServico(100,"reconhecimento verdadeiro pf", "daniela",100.00,null)
testes.createLoteSelos(12345,3006,10)
//console.log(testes.servicos)
console.log(testes.lotesSelo)
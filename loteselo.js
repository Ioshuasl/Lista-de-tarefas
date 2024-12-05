import { Selo } from "./selo.js";

export class LoteSelo{
    constructor(numeroPedido,tipoAto,quantidadeSelos){
        this.numeroPedido = numeroPedido;
        this.tipoAto = tipoAto;
        this.quantidadeSelos = quantidadeSelos
    }

    gerarSelos(numeroPedido,tipoAto,quantidadeSelos){
        let numeroFinalSelo = 0;
        let selos = []
        let numeroPedidoString = numeroPedido.toString()
        let tipoAtoString = tipoAto.toString()
        let inicioSelo = numeroPedidoString + tipoAtoString

        while (numeroFinalSelo < quantidadeSelos){
            let finalSelo = numeroFinalSelo.toString()
            let numeroSelo = inicioSelo + finalSelo 
            let selo = new Selo(numeroSelo,tipoAto,numeroFinalSelo)
            selos.push(selo)
            numeroFinalSelo++
        }
        return selos
    }

    
}

//let novo = new LoteSelo(12345,3006,10)
//console.log(novo.gerarSelos(12345,3006,10))
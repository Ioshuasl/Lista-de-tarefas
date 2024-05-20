class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
      this.completa = false;
    }
  
    marcarCompleta() {
      this.completa = true;
    }
  
    get descricaoTarefa() {
      return this.descricao;
    }
}

class GerenciadorDeTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(descricao) {
      const tarefa = new Tarefa(descricao);
      this.tarefas.push(tarefa);
    }
  
    listarTarefas() {
      this.tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}: ${tarefa.descricaoTarefa} - ${tarefa.completa ? 'Completa' : 'Pendente'}`);
      });
    }
  
    removerTarefa(index) {
      this.tarefas.splice(index - 1, 1);
    }
}

let gerenciador = new GerenciadorDeTarefas();

gerenciador.adicionarTarefa("Aprender JavaScript");
gerenciador.adicionarTarefa("Praticar codificação");
gerenciador.listarTarefas();

gerenciador.tarefas[0].marcarCompleta();
gerenciador.removerTarefa(2);
gerenciador.listarTarefas();
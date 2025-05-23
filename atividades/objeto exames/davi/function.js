class Exams {   
    constructor(respostas_corretas, peso) {
        this.respostas_corretas = respostas_corretas;
        this.peso = peso;
        this.respostas_alunos = [];
    }

    add(exame) {
        var nota = 0
        for(let i=0;i<exame.length;i++) {
            if(exame[i] == this.respostas_corretas[i]) {
                nota += this.peso[i];
            } 
        }
        this.respostas_alunos.push(nota)
    }

    avg() {
        var soma = 0
        for(let i=1;i<this.respostas_alunos.length;i+=2) {
            soma += this.respostas_alunos[i];
        }
        var media = soma/(this.respostas_alunos.length/2);
        return media
    }

    min(count = 1) {
        var len_notas = this.respostas_alunos.length;
        var notas = [];
        for(let i=1;i<len_notas;i+=2) {
            notas.push(this.respostas_alunos[i]);
        }
        
        var ordenado = notas.sort((a, b) => a - b);
        var min = []
        for(let i=0;i<count;i++) {
            min.push(ordenado[i])
        }
        return min
    }

    max(count = 1) {
        var len_notas = this.respostas_alunos.length;
        var notas = [];
        for(let i=1;i<len_notas;i+=2) {
            notas.push(this.respostas_alunos[i]);
        }
        
        var ordenado = notas.sort((a, b) => a - b);
        var max = []
        for(let i=(notas.length-count);i<notas.length;i++) {
            max.push(ordenado[i])
        }
        return max
    }

    lt(limit) {
        var len_notas = this.respostas_alunos.length;
        var menor_que = []
        for(let i=1;i<len_notas;i+=2) {
            if(this.respostas_alunos[i]<limit) {
                menor_que.push(this.respostas_alunos[i])
            }
        }
        return menor_que
    }

    gt(limit) {
        var len_notas = this.respostas_alunos.length;
        var maior_que = []
        for(let i=1;i<len_notas;i+=2) {
            if(this.respostas_alunos[i]>limit) {
               maior_que.push(this.respostas_alunos[i])
            }
        }
        return maior_que
    }
}

export { Exams }
export class Exams{
    constructor(gabarito, peso){
        this.gabarito = gabarito;
        this.peso = peso;
        this.respostas_aluno = [];
    }

    add(exame) {
        let nota = 0;
        for (let i = 0; i < exame.length; i++) {
            if (exame[i] === this.gabarito[i]) {
                nota += this.peso;
            }
        }
        this.respostas_aluno.push({
            respostas: exame,
            nota: nota
        })
    }

    avg() {
        if (this.respostas_aluno.length === 0) return 0
        let soma = 0
        for (const resposta of this.respostas_aluno) {
            soma += resposta.nota;
        }
        return soma / this.respostas_aluno.length;
    }

    min() {
        if (this.respostas_aluno.length === 0) return null;
        let menor = this.respostas_aluno[0].nota;
        for (const resposta of this.respostas_aluno) {
            if (menor > resposta.nota) {
                menor = resposta.nota;
            }
        }
        return menor

    }

    max() {
                if (this.respostas_aluno.length === 0) return null;
        let maior = this.respostas_aluno[0].nota;
        for (const resposta of this.respostas_aluno) {
            if (maior < resposta.nota) {
                maior = resposta.nota;
            }
        }
        return maior
    }

    lt(limite) {
        let menor_que = []
        for (let nota of this.respostas_aluno) {
            if (nota.nota < limite) {
                menor_que.push(nota.nota)
            }
        }
        return menor_que
    }
    
    gt(limite) {
        let maior_que = []
        for (let nota of this.respostas_aluno) {
            if (nota.nota > limite) {
                maior_que.push(nota.nota)
            }
        }
        return maior_que
    }
}
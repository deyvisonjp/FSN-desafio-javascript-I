// Base a ser utilizada
const alunosDaEscola = [{
        nome: "Henrique",
        notas: [5, 7, 7, 9],
        cursos: [{
            nomeDoCurso: "Full Stack"
        }],
        faltas: 4
    },
    {
        nome: "Edson",
        notas: [],
        cursos: [],
        faltas: 2
    },
    {
        nome: "Bruno",
        notas: [10, 9.8, 9.6],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Guilherme",
        notas: [10, 9.8, 9.6],
        cursos: [{
            nomeDoCurso: "Full Stack",
            dataMatricula: new Date
        }],
        faltas: 0
    },
    {
        nome: "Carlos",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Lucca",
        notas: [10, 9.8, 9.6],
        cursos: [{
            nomeDoCurso: "UX",
            dataMatricula: new Date
        }],
        faltas: 1
    }
];

// implementação

/* Adicionar um novo aluno 
=================================================================================*/
function adicionarAluno(nome) {
    alunosDaEscola.push({
        nome,
        notas: [],
        cursos: [],
        faltas: 0
    });
    return `Aluno ${nome} adicionado com sucesso!`;
}

/*Listar Alunos
=================================================================================*/
const listarAlunos = () => {
    alunosDaEscola.forEach((aluno, indice) => {
        console.log(
                "_".repeat(15) + "[" + indice + "]" + "_".repeat(15) + "\n Nome: " +
                aluno.nome + "\n Notas: " +
                aluno.notas + "\n Faltas: " +
                aluno.faltas) +
            aluno.cursos.forEach((curso) => console.log(" Curso: " + curso.nomeDoCurso + " - Data: " +
                curso.dataMatricula.getDate() + "/" + (curso.dataMatricula.getMonth() + 1) + "/" + curso.dataMatricula.getUTCFullYear()));
    })
}

/*Buscar por nome de aluno
=================================================================================*/
function buscarAluno(nome) {
    let result = alunosDaEscola.filter((aluno) => {
        return aluno.nome.indexOf(nome) !== -1;
    });
    if (result.length >= 1) {
        console.log("Aluno " + nome + " encontrado:")
        return result;
    } else {
        return `Aluno [${nome}] não Cadastrado!`
    }
}

/*Funçao padrão para pesquisa por nome
=================================================================================*/
const pesquisa = (pesquisarPor) => {
    let achou = alunosDaEscola.filter(aluno => {
        return aluno.nome.indexOf(pesquisarPor.nome) !== -1;
    });
    return achou;
}


/*Cadastrar um aluno em um curso
=================================================================================*/
function matricularAluno(aluno, curso) {
    let resposta = pesquisa(aluno);
    if (resposta.length >= 1) {
        aluno.cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date
        });
        return ".:.:.: Cadastro de Aluno em Curso :.:.:. \n" +
            "Aluno " + aluno.nome + " cadatrado no curso de: " + curso + " - Data " + new Date;
    } else {
        return ".:.:.: Cadastro de Aluno em Curso :.:.:. \n" +
            "Aluno não Cadastrado!"
    }
}

/*Funcao Dar falta a aluno
=================================================================================*/
function aplicarFalta(aluno) {
    let resposta = pesquisa(aluno);
    if (resposta.length >= 1) {
        aluno.faltas++;
        return `O Aluno ${aluno.nome} faltou!`;
    } else {
        return "O Aluno digitado não existe!";
    }
}

/*Funcao Aplicar Nota
=================================================================================*/
function aplicarNota(aluno) {
    let resposta = pesquisa(aluno);
    if (resposta.length >= 1) {
        if (aluno.cursos.length >= 1) {
            aluno.notas.push(notas = 1);
            return " Sistema de notas\n" +
                "O aluno recebeu a seguinte nota " + "7";
        } else {
            return "O aluno não esta matriculado em nenhum curso";
        }
    } else {
        return "Este Aluno não esta cadastrado no sistema"
    }
}

/*Funcao Aprovar Aluno
=================================================================================*/
function aprovarAluno(aluno) {
    let resposta = pesquisa(aluno);
    let media = 0;
    if ((resposta.length >= 1) && (aluno.cursos.length >= 1)) {
        let somanota = 0;
        aluno.notas.forEach(nota => {
            somanota += nota;
        })
        media = (somanota / aluno.notas.length);
    } else if (aluno.cursos.length < 1) {
        return "Este Aluno não esta matriculado em nenhuma matéria";
    } else {
        return "Este Aluno não esta cadastrado no sistema"
    }

    //Retorna o resulta dependendo da média
    console.log(".:.:.: Sistema de Aprovação :.:.:.");
    if ((media >= 7) && (aluno.faltas <= 3)) {
        return "O Aluno " + aluno.nome + " foi Aprovado com média " + media.toFixed(2);
    } else if (media < 7) {
        return "O Aluno " + aluno.nome + " foi reprovado por média " + media.toFixed(2);
    } else if (aluno.faltas > 3) {
        return "O Aluno " + aluno.nome + " foi reprovado por faltas";
    }
}

/*Teste e consoles
=================================================================================*/
let teste = {
    nome: "Joao",
    notas: [],
    cursos: [],
    faltas: 2
}

//console.log(adicionarAluno("Deyvison"));
//console.log(listarAlunos());
//console.log(buscarAluno("Henrique"))
// console.log(matricularAluno(teste, "Java"));
// console.log(matricularAluno(alunosDaEscola[1], "Java"));
// console.log(listarAlunos());
// console.log(alunosDaEscola[1]);
// console.log(aplicarFalta(teste));
// console.log(teste);

// console.log(alunosDaEscola[3]);
//console.log(aplicarNota(alunosDaEscola[3]));
// console.log(alunosDaEscola[3]);

// console.log(alunosDaEscola[3]);
console.log(aprovarAluno(alunosDaEscola[5]));
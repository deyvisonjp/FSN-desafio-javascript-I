// Base a ser utilizada
const alunosDaEscola = [
    {
        nome: "Henrique", notas: [], cursos: [], faltas: 5 
    },
    {
        nome: "Edson", notas: [], cursos: [], faltas: 2
    },
    {
        nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0
    },
    {
        nome: "Guilherme", notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date}],
        faltas: 0
    },
    {
        nome: "Carlos", notas: [], cursos: [], faltas: 0
    },
    {
        nome: "Lucca",
        notas: [10, 9.8, 9.6],
        cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date
        }],
        faltas: 1
    }
];


// implementação

// Adicionar um novo aluno
function adicionarAluno(nome) {
    alunosDaEscola.push({nome, notas: [],cursos: [], faltas: 0});
    return `Aluno ${nome} adicionado com sucesso!`;
}

//Listar Alunos
const listarAlunos = () => {
    alunosDaEscola.forEach((aluno, indice) => {
        console.log(
                "_".repeat(15) + "[" + indice + "]" + "_".repeat(15) + "\n Nome: " +
                aluno.nome + "\n Notas: " +
                aluno.notas + "\n Faltas: " +
                aluno.faltas) +
                aluno.cursos.forEach((curso) => console.log(" Curso: " + curso.nomeDoCurso + " - Data: " +
                    curso.dataMatricula.getDate() + "/" + (curso.dataMatricula.getMonth()+1) + "/" + curso.dataMatricula.getUTCFullYear()));
    })
}

//Buscar por nome de aluno
function buscarAluno(nome){
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

//Cadastrar um aluno em um curso.
function matricularAluno(aluno, curso){
    let result = alunosDaEscola.filter((alunoAtual) => {
        return alunoAtual.nome.indexOf(aluno.nome) !== -1;
    });
    if (result.length >= 1) {
        aluno.cursos.push({nomeDoCurso:curso, dataMatricula: new Date});
        return ".:.:.: Cadastro de Aluno em Curso :.:.:. \n" + 
        "Aluno " + aluno.nome + " cadatrado no curso de: " + curso +" - Data " + new Date;
    } else {
        return ".:.:.: Cadastro de Aluno em Curso :.:.:. \n" + 
        "Aluno não Cadastrado!"
    } 

    // alunosDaEscola.forEach(alunoAtual => {
    //     if (alunoAtual.nome == aluno.nome) {
    //         alunoAtual.cursos.push({nomeDoCurso:curso, dataMatricula: new Date}) 
    //         console.log(`Aluno ${aluno.nome} cadatrado no curso de ${curso} - Data ${new Date}`); 
    //         // `${alunoAtual.nome} cadastrado no curso(s) de ${curso} - Data ${alunoAtual.cursos.dataMatricula}`;
    //     } else if (alunoAtual.nome !== aluno.nome){
    //         console.log(`Aluno _${aluno.nome}_ não encontrado`);
    //     }
    // })
}

//console.log(adicionarAluno("Deyvison"));
//console.log(listarAlunos());
//console.log(buscarAluno("Henrique"))

// let teste = {
//     nome: "Joaoxi", notas: [], cursos: [], faltas: 2
// }
// console.log(matricularAluno(teste, "Java"));
// console.log(matricularAluno(alunosDaEscola[1], "Java"));
// console.log(listarAlunos());

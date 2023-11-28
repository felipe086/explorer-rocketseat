/*
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

nome
nota da primeira prova
nota da segunda prova.


Crie uma função que irá calcular a média das notas de cada aluno
Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Joe",
    gradeFirstTest: 9,
    gradeSecondTest: 5,
  },
  {
    name: "Danny",
    gradeFirstTest: 7,
    gradeSecondTest: 4,
  },
  {
    name: "Francis",
    gradeFirstTest: 6,
    gradeSecondTest: 9,
  },
  {
    name: "Michael",
    gradeFirstTest: 10,
    gradeSecondTest: 7,
  },
]

students.forEach(({ name, gradeFirstTest, gradeSecondTest }) => {
  const average = calculateAverage(gradeFirstTest, gradeSecondTest)
  const successOrNot = verify(average)

  successOrNot
    ? alert(`Parabéns ${name}, você passou no concurso`)
    : alert(`${name}, infelizmente você não passou no concurso.`)
})

function verify(average) {
  if (average > 7) {
    return true
  }
  return false
}

function calculateAverage(firstGrade, secondGrade) {
  return (firstGrade + secondGrade) / arguments.length
}

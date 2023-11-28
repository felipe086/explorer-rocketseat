/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC

  peso / (altura * altura)

*/

const patients = [
  {
    name: "Joe",
    age: 26,
    weight: 80,
    height: 190,
  },
  {
    name: "Frank",
    age: 66,
    weight: 80,
    height: 190,
  },
  {
    name: "Daniel",
    age: 46,
    weight: 80,
    height: 190,
  },
]

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function generateIMCMessage(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${calculateIMC(patient.weight, patient.height)}
  `
}

patients.forEach((patient) => {
  let patientIMC = generateIMCMessage(patient)
  alert(patientIMC)
})

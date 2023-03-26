let students = [
  {name:"Cristiano",
   score1: 10,
   score2: 8, 
  },

  {name:"Júlia",
   score1: 10,
   score2: 9, 
  },

  {name:"Camila",
   score1: 5,
   score2: 6, 
  },

  {name:"Almir",
  score1: 5,
  score2: 7, 
 },
]

function Average (score1,score2) {
  return (score1 + score2)/2;
}

function PrintAverage(student) {
  const result = Average (student.score1,student.score2)
  if (result>=7) {
    return `
    A média da(o) aluna(o) ${student.name} é: ${(Average(student.score1,student.score2))}. Parabéns ${student.name}! Você foi aprovado!
    ` 
  } 
  else {
    return `
    A média da(o) aluna(o) ${student.name} é: ${(Average(student.score1,student.score2))}. Não foi dessa vez ${student.name}! Tente novamente!
    `
  } 
}

for (let student of students) {  
  let avaregeMessage = PrintAverage(student)
  alert(avaregeMessage)
}
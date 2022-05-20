const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message: 'Bem ao meu projeto em Cypress-Discovery!'})
})

app.get('/avengers', function (req, res){

  var avengers = ['Tony stark', 'Clint Barton', 'Natasha Rommanoff', 'Stve Rogers', 'Bruce Banner', 'Scot Lang']
  return res.json({data: avengers})
})

app.get('/cnh', function (req, res) {
  const idade = req.query.idade

  if (!idade) {

    return res.json({ message: 'Idade é um campo obrigatório.' })

  }

  var idadeNum = parseInt(idade)

  if (idadeNum >= 18) {

    return res.json({ message: 'Ok, você pode tirar sua CNH.' })

  } else if (idadeNum > 4) {

    return res.json({ message: 'Você é menor de idade, por enquanto sugiro andar de bike.' })

  } else {

    return res.json({ message: 'Melhor ficar na bike de rodinhas.' })

  }
})

app.listen(3000)
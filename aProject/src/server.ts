import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'eae mundo!'})
})

app.listen(3333, () => {
  console.log("Tamo rodando na porta 3000! 😎");
})
const express = require('express');
const { connectToMongoDB, client } = require('./mongoDb'); 
const cors = require('cors');

const app = express();


connectToMongoDB();


app.use(cors());


app.get('/user', async (req, res) => {
  const db = client.db('ontime'); 
  const collection = db.collection('user'); 

  try {
    const result = await collection.find({}).toArray();
    res.json(result);
  } catch (err) {
    console.error('Erro na consulta ao MongoDB:', err);
    res.status(500).send('Erro na consulta ao MongoDB');
  }
});

app.listen(3001, () => {
  console.log('Servidor Node.js em execução na porta 3001');
});

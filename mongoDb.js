const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; 
const client = new MongoClient(url);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
}

module.exports = { connectToMongoDB, client };

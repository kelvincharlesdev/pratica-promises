import axios from 'axios';
import { Endereco } from '../types/endereco';

const cepCasaPaulo = '32235230';
const cepRaroLabs = '30315010';

axios
  .get(`https://viacep.com.br/ws/${cepCasaPaulo}/json/`)
  .then(response => {
    const endereco: Endereco = response.data;
    console.log(`o Paulo mora na rua ${endereco.logradouro}`);
  })
  .catch(erro => {
    console.error('deu erro', erro);
  });

// o Paulo mora na rua "França Campos".
// o Paulo trabalha na rua "Paul Bouthilier".
// o Paulo leva 40 minutos para voltar da "Rua Paul Bouthilier" para a "Rua França Campos".

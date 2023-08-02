import axios from 'axios';

const consultaCep = async (cep: string) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  console.log(response.data);
};

consultaCep('32235150').then(response => console.log(response));

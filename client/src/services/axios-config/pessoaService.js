import { Api } from "./axiosconfig";

  const getAll = async () => {
    try {
      const { data } = await Api.get('/pessoa');
  
      if (data) {
        return {
          data
        };
      }
  
      return new Error('Erro ao listar os registros.');
    } catch (error) {
      console.error(error);
      return new Error((error).message || 'Erro ao listar os registros.');
    }
  };

  export const PessoasService = {
    getAll
  };
import { Api } from "./axiosconfig";

  const getAll = async () => {
    try {
      const  data  = await Api.get('/pessoa');

      if (data) {
        return  data
      }
  
      return new Error('Erro ao listar os registros.');
    } catch (error) {
      console.error(error);
      return new Error((error).message || 'Erro ao listar os registros.');
    }
  };

const create = async (dados) => {
  try {
    const { data } = await Api.post('/pessoa', dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error).message || 'Erro ao criar o registro.');
  }
};

const deleteById = async (id) => {
  try {
    await Api.delete(`/pessoa/${id}`,);
  } catch (error) {
    console.error(error);
    return new Error((error).message || 'Erro ao apagar o registro.');
  }
};

  export const PessoasService = {
    getAll,
    create,
    deleteById
  };
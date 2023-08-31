import { Api } from "./axiosconfig"

export const getAll = async () => {
    const {data} = await Api.get('/pessoa')
    return data.result
  }
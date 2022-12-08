
import {ref} from 'vue'

import {Api} from '../api/Swagger.js';

const client = new Api({
  baseUrl: '/proxy',
  securityWorker: (token) => ({ headers: { 'Authorization': `Token ${token}` } })
});


const searchTerm = ref('')

export default function useHlidac() {
  const setToken = (token:string) => {
    client.setSecurityData(token);
  }

  const removeToken = () => {
    client.setSecurityData(null);
  }

  const search = async (page=1) => {
    const result = await client.api.v2DatasetyHledatDetail('de-minimis',{
      dotaz: searchTerm.value,
      strana: page,
    }, )
    if(! result.data.results) throw new Error('No results')

    return result.data;
  }

  return {
    setToken,
    removeToken,
    search,
    searchTerm
  }


}


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

  const search = async (page=1, term:string) => {
    const result = await client.api.v2DatasetyHledatDetail('de-minimis',{
      dotaz:  term,
      strana: page,
    }, )
    if(! result.data.results) throw new Error('No results')

    return result.data;
  }

  const searchAll = async (term:string) => {
    let page = 1;

    const result = await client.api.v2DatasetyHledatDetail('de-minimis',{
      dotaz:  term,
      strana: page,
    },)
    const total = result.data.total;

    const entries = result.data.results ?? [];
    if(! result.data.results) throw new Error('No results')
    if(typeof total !== 'number') throw new Error('No total')



    while (entries.length < total) {
      page++;

      const result = await client.api.v2DatasetyHledatDetail('de-minimis',{
        dotaz: searchTerm.value ?? term,
        strana: page,
      })
      if(! Array.isArray(result.data.results)) throw new Error('No results')
      entries.push(...result.data.results);

      if(result.data.results.length === 0) break;

    }


    return entries;
  }


  // search for multiple terms one after another
  const searchMultiple = async (terms:string[]) => {
    const results = await Promise.all(terms.map(searchAll))

    return results.flat();
  }


  return {
    setToken,
    removeToken,
    search,
    searchTerm,
    searchAll,
    searchMultiple,
  }
}

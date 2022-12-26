<template>
  <div class="col-span-6 col-start-4 ">
    <div class="flex mb-8 ">
      <input
v-model="token"
        class="p-2 px-2 mx-auto text-sm text-center rounded-sm shadow-sm w-80 bg-stone-900 focus:outline-none focus:shadow-outline hover:shadow-md"
        type="text" placeholder="Token" @change="handleChangeToken">

    </div>
    <form
class="flex"
      :class="(token.length !==32)?'opacity-70 pointer-events-none':''"
      @submit="handleSubmit">
      <input
v-model="searchTerm"
        class="w-full p-2 px-4 rounded-l-lg shadow-lg bg-stone-900 focus:outline-none focus:shadow-outline hover:shadow-xl"
        type="text" placeholder="Search">
      <button
class="p-2 px-3 rounded-r-lg bg-stone-600"
:class="loading? 'pointer-events-none opacity-50':''"
        type="submit">Search</button>
    </form>

  </div>
 <button
class="my-6 p-2 px-3 rounded-lg bg-stone-600 self-center col-span-4 col-start-5"
 :class="results.length? '':'opacity-50 pointer-events-none'"


 @click="downloadResultsAsJson">
      Download JSON
    </button>
  <div
class="flex col-span-12 m-6"
      :class="(token.length !==32)?'opacity-50 pointer-events-none':''">
    <!-- <div v-for="(r,i) in results" :key="(r.id ?? i)">
    <pre>{{r}}</pre></div> -->
    <OutputTable :results="results" />


  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'

import OutputTable from '../components/OutputTable.vue'
import useHlidac from '../use/useHlidac'

const {searchTerm, searchMultiple ,setToken} = useHlidac()

const results = ref<any[]>([])
const error = ref(false)
const token = ref('')

const loading = ref(false)


const downloadResultsAsJson = () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(results.value));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "results.json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}


const handleSubmit = async (e: Event) => {
  error.value = false
  if(token.value.length !==32) return
  loading.value = true

  e.preventDefault()

  // split by ; or ,
  const searchTerms = searchTerm.value.split(/[,;]+/).map(s => s.trim()).filter(s => s.length > 0)

try {
  console.log('searchTerms', searchTerms);

const r = await searchMultiple(searchTerms)
  // save to local storage
  localStorage.setItem('token', token.value)
  results.value = r
  // totalPages.value = r?.total ?? 0
} catch (e) {
     error.value = true
    token.value = ''
    setToken('')

    return []
}
  loading.value = false
}

if(localStorage.getItem('token')){
  token.value = localStorage.getItem('token') ?? ''
  setToken(token.value)

}

const handleChangeToken = () => {
  setToken(token.value)

}

</script>

<style>

</style>

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
        type="submit">Search</button>
    </form>

  </div>

  <div
class="flex col-span-12 p-12"
      :class="(token.length !==32)?'opacity-50 pointer-events-none':''">
    <!-- <div v-for="(r,i) in results" :key="(r.id ?? i)">
    <pre>{{r}}</pre></div> -->
    <table class="w-full overflow-hidden divide-y rounded-md divide-stone-700">
      <thead class="">
        <tr>
          <th
scope="col"
            class="sticky top-0 z-10 bg-black/60 backdrop-blur-lg py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-100 sm:pl-6">
            JmenoPrijemce</th>
          <th
scope="col"
            class="sticky top-0 z-10 bg-black/60 backdrop-blur-lg py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-stone-100 sm:pl-6">
            Ico</th>
          <th
scope="col"
            class="sticky top-0 z-10 bg-black/60 backdrop-blur-lg px-3 py-3.5 text-left text-sm font-semibold text-stone-100">
            PodporaCzk</th>
          <th
scope="col"
            class="sticky top-0 z-10 bg-black/60 backdrop-blur-lg px-3 py-3.5 text-left text-sm font-semibold text-stone-100">
            PodporaEur</th>
          <th
scope="col"
            class="sticky top-0 z-10 bg-black/60 backdrop-blur-lg px-3 py-3.5 text-left text-sm font-semibold text-stone-100">
            PodporaDatum</th>

        </tr>
      </thead>
      <tbody class="divide-y divide-stone-800 bg-stone-900">
        <tr v-for="(r,i) in results" :key="(r.id ?? i)">
          <td
            class="max-w-xs py-4 pl-4 pr-3 text-sm font-medium text-stone-100 whitespace-nowrap sm:pl-6">
            {{ r.JmenoPrijemce }}</td>
          <td
            class="py-4 pl-4 pr-3 text-sm font-medium text-stone-100 whitespace-nowrap sm:pl-6">
            {{ r.Ico }}</td>
          <td class="px-3 py-4 text-sm text-stone-500 whitespace-nowrap">{{
          r.PodporaCzk }}</td>
          <td class="px-3 py-4 text-sm text-stone-500 whitespace-nowrap">{{
          r.PodporaEur }}</td>
          <td class="px-3 py-4 text-sm text-stone-500 whitespace-nowrap">{{
          r.PodporaDatum }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

import useHlidac from '../use/useHlidac'

const {searchTerm, search,setToken} = useHlidac()

const results = ref<any[]>([])
const error = ref(false)
const totalPages = ref(0)
const token = ref('')
const page = ref(1)

const handleSubmit = async (e: Event) => {

  error.value = false
  if(token.value.length !==32) return

  e.preventDefault()

  const r = await search(page.value).catch((e) => {
    error.value = true
    token.value = ''
    setToken('')
  })
  // save to local storage
  localStorage.setItem('token', token.value)
  results.value = r?.results ?? []
  totalPages.value = r?.total ?? 0

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

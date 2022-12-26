<template>
  <div class="overflow-x-scroll w-full">

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

<script lang="ts" setup>
interface ITableItem {
  JmenoPrijemce: string;
  Ico: string;
  PodporaCzk: string;
  PodporaEur: string;
  PodporaDatum: string;
}

defineProps<{
  results: ITableItem[];
}>();

</script>

<template>
    <div class="grid h-screen grid-cols-1 p-8 grid-rows-12">
      <div class="row-span-1">
        <AppHeader />
      </div>
      <div class="grid grid-cols-12 row-span-11">
        <router-view />
      </div>
      <div class="row-span-1">
        <AppFooter />
      </div>
    </div>
</template>

<script lang="ts" setup>

import useDarkmode from './use/Darkmode'

useDarkmode()
</script>

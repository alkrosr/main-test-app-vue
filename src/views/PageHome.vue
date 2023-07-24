<script lang="ts" setup>
 import {useUserStore} from "@/stores/user";

 const userStore = useUserStore()
</script>

<template>
  <div class="">

    {{ userStore.users }}
  </div>
</template>
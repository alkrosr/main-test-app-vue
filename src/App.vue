<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useUserStore} from "@/stores/user";

const userStore = useUserStore()

void userStore.fetchUsers()
</script>

<template>
  <RouterView />
</template>

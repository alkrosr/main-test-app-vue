<script lang="ts" setup>
 import {useUserStore} from "@/stores/user";
 import Header from "@/components/Header.vue";
 import Table from "@/components/Table.vue";


 const userStore = useUserStore()

 void userStore.fetchUsers()

 console.log(", ", userStore)

</script>

<template>
    <Header />

    <Table :users="userStore.usersExtended"/>
</template>
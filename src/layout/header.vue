<template>
    <div class="d-flex bg-primary py-2 px-5">
        <v-toolbar-title class="text-white">Hello admin</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined class="flex justify-center" color="primary" @click="logout">
            <BaseIcon name="logout" class="w-5 h-5 mr-2 text-white" />
            Logout
        </v-btn>
    </div>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
function logout() {
    // Logout funksiyasini bu yerda qo'llashingiz mumkin
    // console.log('Logout clicked');
    router.push('/login')
}
</script>
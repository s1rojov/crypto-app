<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>Hello admin</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined rounded class="flex justify-center" color="white" @click="logout">
            <BaseIcon name="logout" class="w-5 h-5 mr-2 text-white" />
            Logout
        </v-btn>

    </v-app-bar>

</template>
<script setup lang="ts">
function logout() {
    // Logout funksiyasini bu yerda qo'llashingiz mumkin
    console.log('Logout clicked');
}
</script>
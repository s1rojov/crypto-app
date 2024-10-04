<template>
    <v-app>
        <div class="d-flex h-screen overflow-hidden">
            <div class="w-1/5">
                <SidebarComponent />
            </div>
            <div class="w-4/5 h-screen">
                <HeaderComponent />
                <div class="px-5 py-2">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script setup lang="ts">
import HeaderComponent from '@/layout/header.vue';
import SidebarComponent from '@/layout/sidebar.vue';
</script>

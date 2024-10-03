<template>
    <div class="border-r h-screen">
        <p class="my-3 text-lg font-medium text-center">Test Application</p>
        <div class="">
            <v-list-item v-for="item in sidebarItems" :key="item.name" :title="item.name" :to="item.path" link
                class="gap-3">
                <template v-slot:prepend>
                    <BaseIcon :name="item.icon" class="w-6 h-6 text-blue-900" />
                </template>
            </v-list-item>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLayoutFn } from '@/layout/composable';
const { sidebarItems } = useLayoutFn();
</script>

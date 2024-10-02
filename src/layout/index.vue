<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="3" class="pa-0">
                        <SidebarComponent />
                    </v-col>
                    <v-col cols="9">
                        <HeaderComponent />
                        <ContentComponent />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import HeaderComponent from '@/layout/header.vue';
import SidebarComponent from '@/layout/sidebar.vue';
import ContentComponent from '@/layout/content.vue';
</script>
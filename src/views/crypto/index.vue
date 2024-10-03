<script setup lang="ts">
import FileUploader from '@/components/FileUploader/index.vue'
import { useCryptoFn } from '@/views/crypto/composable';

const { readUploadedExcelData, excelData } = useCryptoFn()
</script>
<template>
    <div class="d-flex items-center gap-5">
        <FileUploader @upload="readUploadedExcelData" />
        <!-- {{ excelData }} -->

        <p v-for="item, index in excelData" :key="index">
            {{ item }}
        </p>
    </div>
</template>
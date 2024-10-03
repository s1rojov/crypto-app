<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['upload'])
const fileInput = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);

// Fayl tanlash oynasini ochish funksiyasi
const triggerFileUpload = () => {
    fileInput.value?.click();
};

// Fayl tanlanganda uni yuklash
const handleFileChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        selectedFile.value = file;
        emit('upload', file)
    }
}
</script>
<template>
    <div>
        <input ref="fileInput" type="file" accept=".jpg,.png,.pdf,.docx,.xlsx" style="display: none"
            @change="handleFileChange" />
        <v-btn color="primary" @click="triggerFileUpload">
            Upload File
        </v-btn>
    </div>
</template>
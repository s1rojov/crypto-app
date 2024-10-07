    <script setup lang="ts">
    import FileUploader from '@/components/FileUploader/index.vue'
    import { useCryptoFn } from '@/views/crypto/composable';

    const { readUploadedExcelData, excelData } = useCryptoFn()


</script>
    <template>
        <div class="items-center gap-5">
            <div class="flex gap-3">
                <FileUploader @upload="readUploadedExcelData" />
            <v-btn color="success" v-if="excelData.length > 0">
                Send File
            </v-btn>
            </div>
            <div class="mt-5">
                <table class="w-full custom-table" v-if="excelData.length > 0">
                    <tr>
                        <th class="text-start">Nomi</th>
                        <th class="text-start">Belgisi</th>
                        <th class="text-start">Joizmi</th>
                        <th colspan="6" class="text-start">Maqsadi</th>
                    </tr>
                    <tr v-for="item in excelData" :key="item.Nomi">
                        <td>{{ item.Nomi }}</td>
                        <td>{{ item.Belgisi }}</td>
                        <td>{{ item.Joizmi }}</td>
                        <td colspan="6">{{ item.Maqsadi }}</td>
                    </tr>

                </table>
            </div>
        </div>
    </template>

<style scoped>
.custom-table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
}

.custom-table th,
.custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
}

.custom-table th {
    background-color: #f0f0f0;
    /* Sarlavha uchun fon rangi */
    color: #333;
}

.custom-table td {
    background-color: #fff;
}
</style>
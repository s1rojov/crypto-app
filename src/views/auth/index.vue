<template>
    <div class="bg-stone-50 w-screen h-screen overflow-hidden">
        <v-container>
            <div class="d-flex justify-center mt-[25vh]">
                <v-form v-model="form" class="w-1/3">
                    <p class="text-center mb-4 text-3xl font-bold">Welcome crypto app</p>
                    <v-text-field v-model="email" label="Username" color="primary" :rules="[required]"
                        class="custom-label"></v-text-field>

                    <v-text-field v-model="password" label="Password" type="password" :rules="[required]"
                        class="custom-label"></v-text-field>

                    <v-btn :loading="loading" color="primary" class="mt-3" block @click="onSubmit">
                        Submit
                    </v-btn>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';


const router = useRouter()

const form = ref(false)
const email = ref(null)
const password = ref(null)
const loading = ref(false)

const onSubmit = () => {
    if (!form.value) return

    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
    router.push('/dashboard')
}

const required = (v: any) => {
    return !!v || 'Field is required'
}
</script>

<style scoped>
.custom-label .v-field__label {
    color: black !important;
    /* Label rangini qora qilib o'zgartirdik */
}

.custom-label .v-field--focused .v-field__label {
    color: black !important;
    /* Fokus bo'lgan vaqtda qora rang saqlanadi */
}
</style>
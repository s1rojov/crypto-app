<template>
    <v-sheet class="" width="500">
        <v-form ref="form">
            <v-text-field v-model="userId" label="User id" required></v-text-field>

            <div class="d-flex flex-column">
                <v-btn class="mt-4" color="success" block @click="onSubmit">
                    Jo'natish
                </v-btn>
            </div>
        </v-form>
    </v-sheet>
    <v-snackbar v-model="notify" color="success" location="top right">
        {{ notifyText }}
        <template #actions>
            <v-btn color="white" variant="text" @click="notify = false">
                X
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

const userId = ref<string | null>(null); // userId string bo'lishi kerak
const MESSAGE = "Yopiq hamjamiyatimizga qoʻshilganingiz bilan tabriklaymiz 🎉🎉🎉";
const BOT_TOKEN = "7810591719:AAEAU1iYrN_om1vzVKvUrdnqs4YzhRW7rxw";
const BUTTON_TEXT = "Yopiq hamjamiyatimizga qo'shilish";
const LINK = "https://t.me/+zfQUgxh1BkRhYmVi"; // Bu yerga kerakli link qo‘ying
const notifyText = ref<any>('')
const notify = ref<boolean>(false)
async function onSubmit() {
    if (!userId.value) {
        console.error("User ID kiritilmagan!");
        return;
    }

    try {
        const response = await axios.post(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                chat_id: userId.value,
                text: MESSAGE,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: BUTTON_TEXT, url: LINK }
                        ]
                    ]
                }
            }
        );
        userId.value = null
        notify.value = true
        console.log("Xabar yuborildi!", response.data);
        notifyText.value = "Muvaffaqqiyatli jo`natildi"
        setTimeout(() => (notify.value = false), 1000)
    } catch (error) {
        console.error("Xatolik:", error);
        notifyText.value = "Xatolik"
    }
}
</script>

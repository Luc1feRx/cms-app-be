<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { ref, watch } from "vue";
const props = defineProps({
    isShow: {
        type: Boolean,
        required: true,
    },
    content: {
        type: String,
        default: "content",
        required: true,
    },
    title: {
        type: String,
        default: "title",
        required: true,
    },
    handleConfirm: {
        type: Function,
        default: () => ({}),
        required: false,
    },
    handleCancel: {
        type: Function,
        default: () => ({}),
        required: false,
    },
    handleClose: {
        type: Function,
        default: () => ({}),
        required: false,
    },
});
</script>
<template>
    <Dialog
        v-model:visible="props.isShow"
        modal
        :closable="false"
        :header="props.title"
        :style="{ width: '25rem' }"
        class="relative"
    >
        <!-- <button
            @click="handleCancel() || handleClose()"
            type="button"
            label="X"
            class="absolute top-0 right-0 p-4 cursor-pointer"
        >
            X
        </button> -->
        <span class="text-surface-500 dark:text-surface-400 block mb-8">{{
            props.content
        }}</span>
        <div class="flex justify-end gap-2">
            <!-- <Button
                v-if="handleClose"
                type="button"
                label="Close"
                severity="secondary"
                @click="props.isShow = true"
            ></Button> -->
            <Button
                v-if="handleCancel"
                type="button"
                label="Cancel"
                severity="secondary"
                @click="handleCancel"
            ></Button>
            <Button
                v-if="handleConfirm"
                type="button"
                label="Yes"
                @click="handleConfirm"
            ></Button>
        </div>
    </Dialog>
</template>

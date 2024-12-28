<template>
    <div class="mb-4">
        <label
            :for="name"
            class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
        >
            {{ label }}
            <span v-if="isRequired" class="text-red-500">*</span>
        </label>
        <InputText
            :id="name"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="attrs"
            class="w-full"
            :type="typeInput"
            :placeholder="placeHolder"
        />
    </div>
</template>

<script setup>
import InputText from "primevue/inputtext";

defineProps({
    label: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    modelValue: {
        type: null,
        default: "",
    },
    attrs: {
        type: Object,
        default: () => ({}),
    },
    typeInput: {
        type: String,
        default: "text",
    },
    placeHolder: {
        type: String,
        default: "",
    },
    isRequired: {
        type: Boolean,
        default: false,
    },
});

defineEmits(["update:modelValue"]);
</script>

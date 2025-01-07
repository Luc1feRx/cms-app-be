<script setup>
import Avatar from "primevue/avatar";
import Popover from "primevue/popover";
import { ref } from "vue";

const openPopover = ref(null);
const handleAvatarClick = (event) => {
    openPopover.value.toggle(event);
};

</script>

<template>
    <div
        class="ml-[250px] bg-surface-0 dark:bg-surface-950 bg-black main-header"
    >
        <div
            class="bg-surface-900 text-gray-100 py-4 px-6 lg:px-5 flex justify-between items-center flex-wrap"
        >
            <div class="inline-flex gap-1 items-center"></div>
            <Avatar
                image="https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=apYgDs9tYQiwn7pcDOGbNg"
                class="mr-2 avatar-image"
                size="large"
                shape="circle"
                @click="handleAvatarClick"
            />
            <Popover ref="openPopover">
                <div class="flex flex-col gap-4 w-[10rem]">
                    <div>
                        <span class="font-medium block cursor-pointer"
                            >Logout</span
                        >
                        <InputGroup>
                            <InputText
                                value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3"
                                readonly
                                class="w-[25rem]"
                            ></InputText>
                        </InputGroup>
                    </div>
                </div>
            </Popover>
        </div>
    </div>
</template>

<style>
@import "./header.scss";
</style>

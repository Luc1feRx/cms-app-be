<template>
    <div>
        <!-- Nút toggle (chỉ hiển thị trên màn hình nhỏ) -->
        <button
            ref="buttonRef"
            class="toggle-btn md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded"
            @click="handleOpenSidebar"
        >
            <i class="pi pi-bars text-xl"></i>
        </button>

        <!-- Sidebar -->
        <aside
            ref="sidebarRef"
            class="sidebar transition-transform transform fixed h-full bg-gray-800 text-white z-40 md:static md:transform-none"
            :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        >
            <Image
                src="https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=apYgDs9tYQiwn7pcDOGbNg"
                alt="Image"
                width="250"
            />

            <Divider layout="horizontal" />

            <!-- Menu -->
            <ul>
                <li v-for="item in menuItems" :key="item.label">
                    <Link
                        :href="item.route"
                        class="sidebar-link flex items-center p-2 hover:bg-gray-700"
                    >
                        <i :class="item.icon" class="mr-2"></i>
                        <span>{{ item.label }}</span>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Image from "primevue/image";
import Divider from "primevue/divider";
import { Link } from "@inertiajs/vue3";
import { useClickOutside } from "../../../hooks/useClickOutside";
const menuItems = ref([
    { label: "Dashboard", route: "/", icon: "pi pi-home" },
    { label: "Users", route: "/users", icon: "pi pi-users" },
    { label: "Settings", route: "/settings", icon: "pi pi-cog" },
]);

const isSidebarOpen = ref(false); // Trạng thái mở/đóng sidebar
const sidebarRef = ref(null);
const buttonRef = ref(null);

const handleOpenSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
    console.log("isSidebarOpen", isSidebarOpen.value);
};

// Hàm đóng sidebar
const closeSidebar = () => {
    isSidebarOpen.value = false;
};
useClickOutside([sidebarRef, buttonRef], closeSidebar);
</script>

<style scoped>
@import "./sidebar.scss";
</style>

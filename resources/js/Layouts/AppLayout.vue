<!-- <template>
    <Header />
    <div class="app-layout">
        <Sidebar />
        <div class="main-content">
            <header class="header">
                <h1>Main Layout</h1>
            </header>
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import Header from "../Pages/Components/Header/Header.vue";
import Sidebar from "../Pages/Components/Sidebar/Sidebar.vue";
</script>

<style scoped lang="scss">
.app-layout {
    display: flex;
}

.main-content {
    flex: 1;
    margin-left: 250px;
    padding: 20px;

    @media (max-width: 768px) {
        margin-left: 0 !important;
    }
}

.header {
    background-color: #f5f5f5;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
}
</style> -->

<script setup>
import { useLayout } from "../Layouts/composables/layout";
import { computed, ref, watch } from "vue";
import AppFooter from "./AppFooter.vue";
import AppSidebar from "./AppSidebar.vue";
import AppTopbar from "./AppTopbar.vue";

const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const containerClass = computed(() => {
    return {
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive":
            layoutState.staticMenuDesktopInactive &&
            layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
    };
});

function bindOutsideClickListener() {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive = false;
                layoutState.staticMenuMobileActive = false;
                layoutState.menuHoverActive = false;
            }
        };
        document.addEventListener("click", outsideClickListener.value);
    }
}

function unbindOutsideClickListener() {
    if (outsideClickListener.value) {
        document.removeEventListener("click", outsideClickListener);
        outsideClickListener.value = null;
    }
}

function isOutsideClicked(event) {
    const sidebarEl = document.querySelector(".layout-sidebar");
    const topbarEl = document.querySelector(".layout-menu-button");

    return !(
        sidebarEl.isSameNode(event.target) ||
        sidebarEl.contains(event.target) ||
        topbarEl.isSameNode(event.target) ||
        topbarEl.contains(event.target)
    );
}
</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <AppTopbar />
        <AppSidebar />
        <div class="layout-main-container">
            <div class="layout-main">
                <slot></slot>
            </div>
            <AppFooter />
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
</template>

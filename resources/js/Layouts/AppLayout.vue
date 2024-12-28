<template>
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
</style>

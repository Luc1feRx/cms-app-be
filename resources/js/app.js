import "./bootstrap";
import "../css/app.css";
import "primeicons/primeicons.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";
import AppLayout from "./Layouts/AppLayout.vue";
import { ZiggyVue } from "ziggy-js";
import Toast from "primevue/toast";
import ConfirmationService from "primevue/confirmationservice";

import "../assets/styles.scss";
import "../assets/tailwind.css";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        console.log("page", page);
        page.default.layout = page.default.layout || AppLayout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                    options: {
                        darkModeSelector: ".app-dark",
                    },
                },
            })
            .use(ToastService)
            .use(ConfirmationService)
            .component("Toast", Toast)
            .mount(el);
    },
});

import { createStore } from "vuex";
import dialog from "./modules/dialog";

export default createStore({
    modules: {
        dialog,
    },
});

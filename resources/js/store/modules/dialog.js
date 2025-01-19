const state = {
    isShowModal: false,
};

const mutations = {
    SET_IS_SHOW_MODAL(state, value) {
        state.isShowModal = value;
    },
};

const actions = {
    openDialog({ commit }) {
        commit("SET_IS_SHOW_MODAL", true);
    },
    closeDialog({ commit }) {
        commit("SET_IS_SHOW_MODAL", false);
    },
};

const getters = {
    isShowModal: (state) => state.isShowModal,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

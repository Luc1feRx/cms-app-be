export const getStatusLabel = (status) => {
    switch (status) {
        case 1:
            return "Active";

        case 2:
            return "Inactive";

        default:
            return null;
    }
}

export const getStatusClass = (status) => {
    switch (status) {
        case 1:
            return "success";

        case 2:
            return "danger";

        default:
            return null;
    }
};
import { onMounted, onUnmounted } from "vue";

export function useClickOutside(targetRefs, handleClose) {
    const handleClickOutside = (event) => {
        // check if target ref value contains value when user click
        const clickedInside = targetRefs.some(
            (ref) => ref.value && ref.value.contains(event.target)
        );

        if (!clickedInside) {
            handleClose();
        }
    };

    onMounted(() => {
        document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
        document.removeEventListener("click", handleClickOutside);
    });
}

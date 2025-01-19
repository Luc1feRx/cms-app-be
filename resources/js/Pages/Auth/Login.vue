<script setup>
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import { ref } from "vue";
import AuthLayout from "../../Layouts/AuthLayout.vue";
import { useForm } from "vee-validate";
import { object, string } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import InputCommon from "../Components/Input/InputCommon.vue";
import { Head, router, usePage } from "@inertiajs/vue3";
import { useToast } from "primevue/usetoast";
// defined master layout
defineOptions({ layout: AuthLayout });
// defined props
defineProps({ title: String });
const page = usePage();
const checked1 = ref(true);
const toast = useToast();

const { values, handleSubmit, defineField, errors, isSubmitting } = useForm({
    validationSchema: toTypedSchema(
        object({
            email: string({ message: "This field is required123123" }).email({
                message: "Must be a valid email",
            }),
            password: string({
                message: "This field is required123123",
            }).min(6, { message: "Too short" }),
        })
    ),
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit(async (values) => {
    // try {
    //     const response = await api.post(route("admin.login.post"), values);
    //     console.log("response.status", response.status);
    // } catch (error) {
    //     toast.add({
    //         severity: "warn",
    //         summary: "Warn Message",
    //         detail: errors.email,
    //         life: 3000,
    //     });
    //     console.error("Lỗi:", errors);
    // }
    router.post(route("admin.login.post"), values, {
        onSuccess: () => {
            console.log("Login thành công!");
        },
        onError: (errors) => {
            toast.add({
                severity: "warn",
                summary: "Warn Message",
                detail: errors[0],
                life: 3000,
            });
            console.error("Lỗi:", errors);
        },
    });
});
</script>

<template>
    <Toast />
    <Head :title="title" />
    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
        <div
            class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto"
        >
            <div class="text-center mb-8">
                <svg
                    class="mb-4 mx-auto fill-surface-600 dark:fill-surface-200 h-16"
                    viewBox="0 0 30 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
                    />
                </svg>

                <div
                    class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4"
                >
                    Welcome Back
                </div>
                <span
                    class="text-surface-600 dark:text-surface-200 font-medium leading-normal"
                    >Don't have an account?</span
                >
                <a
                    class="font-medium no-underline ml-2 text-primary cursor-pointer"
                    >Create today!</a
                >
            </div>

            <form @submit.prevent="onSubmit">
                <div>
                    <InputCommon
                        label="Email"
                        name="email1"
                        v-model="email"
                        :attrs="emailAttrs"
                        placeholder="Email"
                        isRequired
                    />

                    <div v-if="errors.email" class="text-red-500">
                        {{ errors.email }}
                    </div>

                    <InputCommon
                        label="Password"
                        name="password1"
                        v-model="password"
                        :attrs="passwordAttrs"
                        placeholder="Password"
                        typeInput="password"
                        isRequired
                    />

                    <div v-if="errors.password" class="text-red-500">
                        {{ errors.password }}
                    </div>

                    <div class="flex items-center justify-between mb-12">
                        <div class="flex items-center">
                            <Checkbox
                                id="rememberme1"
                                v-model="checked1"
                                :binary="true"
                                class="mr-2"
                            />
                            <label for="rememberme1">Remember me</label>
                        </div>
                        <a
                            class="font-medium no-underline ml-2 text-primary text-right cursor-pointer"
                            >Forgot password?</a
                        >
                    </div>

                    <Button
                        type="submit"
                        label="Sign In"
                        icon="pi pi-user"
                        class="w-full"
                        :disabled="isSubmitting"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

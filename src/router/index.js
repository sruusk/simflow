import {createRouter, createWebHistory} from "vue-router";
import { useAircraftStore } from "@/stores";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomeView,
            beforeEnter: (to, from) => {
                useAircraftStore().$reset();
            }
        },
        {
            name: 'aircraft',
            path: '/:aircraft',
            component: () => import('@/views/ChecklistView.vue'),
            beforeEnter: async (to, from) => {
                await useAircraftStore().getChecklist(to.params.aircraft);
            }
        }
    ]
});

export default router;

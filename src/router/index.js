import {createRouter, createWebHistory} from 'vue-router'
import nestedPath from "@/assets/json/nestedPath.json"
import PublicComponements from "@/views/PublicComponements.vue";
import PrivateComponements from "@/views/PrivateComponements.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: `${nestedPath.path}`,
            name: 'public',
            component: PublicComponements
        },
        {
            path: `${nestedPath.path}private`,
            name: 'private',
            component: PrivateComponements
        }
    ]
})

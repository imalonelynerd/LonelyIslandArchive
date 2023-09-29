import {createRouter, createWebHistory} from 'vue-router'
import nestedPath from "@/assets/json/nestedPath.json"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: `${nestedPath.path}`,
            name: 'public',
        },
        {
            path: `${nestedPath.path}private`,
            name: 'private',
        }
    ]
})

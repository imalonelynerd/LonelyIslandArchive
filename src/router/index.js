import {createRouter, createWebHistory} from 'vue-router'

import nestedPath from "@/assets/json/nestedPath.json"

import Projects from "@/views/Projects.vue";
import SelfHost from "@/views/SelfHost.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Links from "@/views/Links.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: `${nestedPath.path}`,
            name: 'Home',
            component: Home
        },
        {
            path: `${nestedPath.path}projects`,
            name: 'Projects',
            component: Projects
        },
        {
            path: `${nestedPath.path}about`,
            name: 'About',
            component: About
        },
        {
            path: `${nestedPath.path}links`,
            name: 'Links',
            component: Links
        },
        {
            path: `${nestedPath.path}private`,
            name: 'Private',
            component: SelfHost
        }
    ]
})

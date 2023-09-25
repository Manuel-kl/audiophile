import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/headphones",
        name: "headphones",
        component: () =>
            import (
                /* webpackChunkName: "headphones" */
                "../views/HeadphonesView.vue"
            ),
    },
    {
        path: "/speakers",
        name: "speakers",
        component: () =>
            import ( /* webpackChunkName: "speakers" */ "../views/SpeakersView.vue"),
    },
    {
        path: "/earphones",
        name: "earphones",
        component: () =>
            import ( /* webpackChunkName: "earphones" */ "../views/EarphonesView.vue"),
    },
    {
        path: "/xx99II-headphones",
        name: "xx99II-headphone",
        component: () =>
            import (
                /* webpackChunkName: "headphones-details" */
                "../views/XX99IIHeadphonesView.vue"
            ),
    },
    {
        path: "/xx99-mark-one-headphones",
        name: "xx99-mark-one-headphones",
        component: () =>
            import (
                /* webpackChunkName: "headphones-details" */
                "../views/XX99MarkOneHeadphonesView.vue"
            ),
    },
    {
        path: "/xx59-headphones",
        name: "xx59-headphones",
        component: () =>
            import (
                /* webpackChunkName: "headphones-details" */
                "../views/XX59HeadphonesView.vue"
            ),
    },
    {
        path: "/zx9-speaker",
        name: "zx9-speaker",
        component: () =>
            import (
                /* webpackChunkName: "speaker-details" */
                "../views/ZX9SpeakerView.vue"
            ),
    },
    {
        path: "/zx7-speaker",
        name: "zx7-speaker",
        component: () =>
            import (
                /* webpackChunkName: "speaker-details" */
                "../views/ZX7SpeakerView.vue"
            ),
    },
    {
        path: "/yx1-earphones",
        name: "yx1-earphones",
        component: () =>
            import (
                /* webpackChunkName: "earphones-details" */
                "../views/YX1EarphonesView.vue"
            ),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
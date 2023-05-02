import { createWebHistory, createRouter, RouterView } from "vue-router"

const routes = [
    {
        path: "/:locale?",
        component: RouterView,
        beforeEnter: (to, from, next) => {
            if (to.params.locale === '')
                window.location.replace("/en")

            next()
        },
        children: [
            // {
            //     path: "",
            //     name: "Home",
            //     component: () => import("@/views/PageHome.vue"),
            // },
            // {
            //     path: "contact",
            //     name: "Contact",
            //     component: () => import("@/views/PageContact.vue"),
            // },
            // {
            //     path: "privacy",
            //     name: "Privacy",
            //     component: () => import("@/views/PagePrivacy.vue"),
            // },
            // {
            //     path: "terms-of-use",
            //     name: "TermsOfUse",
            //     component: () => import("@/views/PageTermsOfUse.vue"),
            // }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to) {
        return to.hash === '' ? { top: 0 } : {el: to.hash,top: 70}
    }
});

export default router;
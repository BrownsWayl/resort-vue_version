import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/rooms",
    name: "Rooms",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "rooms" */ "../views/Rooms.vue")
    },
    {
      path: '/rooms/:slug',
      name: 'Single-room',
      component: () => import(/* webpackChunkName: "single-room" */ "../views/SingleRoom.vue")
    }
];

const router = new VueRouter({
  routes
});

export default router;

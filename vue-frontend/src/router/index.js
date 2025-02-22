import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Counter from "@/components/Counter";
import Show from "@/components/Show";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter
    },
    {
      path: "/show",
      name: "Show",
      component: Show
    },
  ] // Add a new route here in Part 2

});

import { RouteRecordRaw } from "vue-router";
import BasicLayout from "../layouts/BasicLayout.vue";
import ACCESS_ENUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BasicLayout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "浏览题目",
        component: () => import("@/views/question/QuestionView.vue"),
      },
      {
        path: "/addQuestion",
        name: "添加题目",
        component: () => import("@/views/question/AddQuestionView.vue"),
      },
      {
        path: "/questionSubmitInfo",
        name: "题目提交信息",
        component: () => import("@/views/question/QuestionSubmitView.vue"),
      },
      {
        path: "/managerQuestion",
        name: "管理题目",
        component: () => import("@/views/question/ManagerQuestionView.vue"),
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "/admin",
        name: "adminView",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/AdminView.vue"),
        meta: {
          access: ACCESS_ENUM.ADMIN,
        },
      },
    ],
  },
  {
    path: "/notAuth",
    name: "notAuth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/notAuth.vue"),
  },
  {
    path: "/question/:id",
    name: "做题",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/question/DoQuestionView.vue"),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/loginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/registerView.vue"),
  },
];

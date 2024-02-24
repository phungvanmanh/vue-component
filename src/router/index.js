import { createRouter, createWebHistory } from "vue-router";
import AdminMaster from "@/layouts/Admin";
import QuanLyAdmin from "@/pages/Admin/QuanLyAdmin";
import ChuyenMuc from "@/pages/Admin/ChuyenMuc";
const routes = [
  {
    path: "/",
    component: AdminMaster,
    children: [
        {
            path: "",
            component: QuanLyAdmin,
        },
        {
            path: "chuyen-muc",
            component: ChuyenMuc,
        },
    ],
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

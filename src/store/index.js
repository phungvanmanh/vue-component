import { createStore } from "vuex";
import axios from "@/axiosConfig";
export default createStore({
    state: {
        tinh_trang : [
            {text : "Hiển Thị", value : 1},
            {text : "Tạm Đóng", value : 0},
        ],

        danh_muc_select : [],

        dataDanhMuc : []
    },
    getters : {
        toSlug: () => (str) => {
            str = str.toLowerCase();
            str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
            str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
            str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
            str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
            str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
            str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
            str = str.replace(/(đ)/g, 'd');
            str = str.replace(/([^0-9a-z-\s])/g, '');
            str = str.replace(/(\s+)/g, '-');
            str = str.replace(/-+/g, '-');
            str = str.replace(/^-+/g, '');
            str = str.replace(/-+$/g, '');
            return str;
        }
    },
    mutations: {
        fecthChuyenMuc (state, data){
            state.danh_muc_select = [{text : "Root", value : "0", tinh_trang : 1}, ...data.map(item => ({ text: item.ten_chuyen_muc, value: item.id, tinh_trang : item.tinh_trang }))];
            state.dataDanhMuc = [...data];
        }
    },
    actions: {
        onFetchChuyenMuc: async ({ commit }) => {
            try {
                const response = await axios.get("admin/chuyen-muc/get-data");
                commit('fecthChuyenMuc', response.data.data);
            } catch (error) {
                console.error("Có lỗi xảy ra trong onFetchChuyenMuc:", error);
            }
        },
    },
});

<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <headerVue></headerVue>
            <menuVue></menuVue>
        </div>
        <div class="page-wrapper">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
        <footerVue></footerVue>
    </div>
</template>
<script>
import headerVue from './header.vue';
import menuVue from './menu.vue';
import footerVue from './footer.vue';
import 'perfect-scrollbar/dist/perfect-scrollbar';
import '../../assets/js/app.js';
export default {
    name: 'admin-master',
    components: {
        headerVue,
        menuVue,
        footerVue,
    }
}
</script>
<style scoped>
@import '../../assets/plugins/simplebar/css/simplebar.css';
@import '../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css';
@import '../../assets/css/bootstrap.min.css';
@import '../../assets/css/bootstrap-extended.css';
@import '../../assets/css/app.css';
@import '../../assets/css/icons.css';
@import '../../assets/css/dark-theme.css';
@import '../../assets/css/semi-dark.css';
@import '../../assets/css/header-colors.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>
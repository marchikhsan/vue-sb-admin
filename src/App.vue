<template>
  <div :class="{ 'sb-nav-fixed': !isLoginPage }">
    <Navbar v-if="!isLoginPage"></Navbar>
    <div :id="layoutId">
      <Sidebar v-if="!isLoginPage"></Sidebar>
      <div :id="contentId">
        <router-view></router-view>
        <Footer v-if="!isLoginPage"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  mounted() {
    // console.log(this.$route);
  },
  computed: {
    isLoginPage() {
      if (this.$route.path === "/login" || this.$route.path === "/registrasi") {
        return true;
      } else {
        return false;
      }
    },
    layoutId() {
      return this.isLoginPage ? "layoutAuthentication" : "layoutSidenav";
    },
    contentId() {
      return this.isLoginPage
        ? "layoutAuthentication_content"
        : "layoutSidenav_content";
    },
  },
};
</script>

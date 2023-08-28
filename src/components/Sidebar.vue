<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <router-link class="nav-link" to="/dashboard">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </router-link>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Vue Start Bootstrap
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "SideBar",
};
</script>
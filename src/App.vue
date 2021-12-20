<template>
  <div class="grid">
    <div class="menu_rwd">
      
      <div class="menu_rwd_title">PORTAFOLIO</div>
      <div @click="aside_rwd()" ><i :class="[ !activeMenu? 'icon-menu': 'icon-exit']"></i></div>
    </div>
    <Sidebar class="part__1" :class="[ !activeMenu ? '': 'show' ]" />
    <router-view class="part__2" />
  </div>
</template>

<style>
@import "./assets/css/variables.css";

.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.part__1 {
  position: sticky;
  top: 1px;
  height: 100vh;
  background: var(--color-primario);
  transition: 1s;
}
.part__2 {
  background: var(--color-secundario);
  overflow-y: auto;
}

.display_block {
  display: block;
}
.menu_rwd {
  font-family: var(--fuente-demas);
  background: var(--color-primario);
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  border-bottom: 1px solid var(--color-primario);
  color: white;
  z-index: 4000;
  transition: 1s;
}
.menu_rwd_title {
  text-align: center;
  letter-spacing: 5px
}


@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .part__1 {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
  }
  .part__2 {

  }
  .show {
    display: block;
  }
}


</style>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
  methods: {
    aside_rwd() {
      // console.log("Hola")
      this.activeMenu = this.activeMenu ? false : true
    },
    menu_rwd() {
    }
  },
  data() {
    return {
      activeMenu: false,
    }
  }
};
</script>

<template>
  <div class="grid">
    <div class="menu_rwd">
      <span @click="aside_rwd()" >X</span>
    </div>
    <Sidebar class="part__1" />
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
  /* overflow: hidden; */
}
.part__1 {
  position: sticky;
  top: 1px;
  height: 100vh;
  background: var(--color-primario);
}
.part__2 {
  background: var(--color-secundario);
  overflow-y: auto;
}

.display_block {
  display: block;
}
.menu_rwd {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: white;
}
@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .part__1 {
    display: none;
  }
  .part__2 {

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
      console.log("Hola")
    }
  },
  data() {
    return {
      menu_rwd: false
    }
  }
};
</script>

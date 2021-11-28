<template>
  <div class="grid">
    <Sidebar class="part__1"/>
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

</style>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

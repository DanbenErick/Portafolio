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
}
.part__1 {
  background: var(--color-primario);
}
.part__2 {
  background: var(--color-secundario);
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

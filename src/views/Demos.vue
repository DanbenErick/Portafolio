<template>
  <div class="Demos">
    <div class="Demos__container">
      <div v-for="proyecto of proyectos" :key="proyecto.id">
        <DemoCard
          :id="proyecto.id"
          :titulo="proyecto.titulo"
          :descripcion="proyecto.descripcion"
          :imagen="proyecto.imagen"
          :tecnologias="proyecto.tecnologias"
          :repositorio="proyecto.repositorio"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.Demos__container {
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4,250px);
}
</style>
<script>
import DemoCard from "../components/DemoCard.vue";
import { mapState } from "vuex";
export default {
  name: "Demos",
  components: {
    DemoCard,
  },
  computed: {
    ...mapState(["proyectos"]),
  },
};
</script>

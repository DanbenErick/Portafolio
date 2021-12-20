<template>
  <div class="Demos">
    <div class="Demos__container">
      <div v-for="proyecto of demoProyectos.slice().reverse()" :key="proyecto.id">
      <div v-show="proyecto.demo">
        <DemoCard
          v-show="proyecto.demo"
          :id="proyecto.id"
          :titulo="proyecto.titulo"
          :descripcion="proyecto.descripcion"
          :imagen="proyecto.imagen"
          :tecnologias="proyecto.tecnologias"
          :repositorio="proyecto.repositorio"
          :demo="proyecto.demo || ''"
        />
        </div>
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
@media (max-width: 480px) {
  .Demos__container {
    grid-template-columns: 1fr;
  }
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
    demoProyectos() {
      console.log(this.proyectos.filter(project => project.demo != ''))
      return this.proyectos.filter(project => project.demo != '')
    }
  },
};
</script>

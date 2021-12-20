<template>
  <div class="Proyectos">
    <div class="Proyectos__container">
      <div v-for="proyecto of proyectos.slice().reverse()" :key="proyecto.id">
        <Card
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
.Proyectos__container {
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4,250px);
}
@media (max-width: 480px) {
  .Proyectos__container {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
import { mapState } from "vuex";
import Card from "../components/Card.vue";
export default {
  name: "Proyectos",
  computed: {
    ...mapState(["proyectos"]),
  },
  components: {
    Card,
  },
};
</script>

<template>
  <div class="Card">
    <div class="Card__container">
      <div class="Card__image">
        <img :src="require('@/'+imagen)" alt="">
      </div>
      <div class="Card__Hover">
        <p class="Card__Hover__title">{{ titulo }}</p>
        <p class="Card__Hover__description">{{ descripcion }}</p>
        <ul class="Card__Hover__tecnologies">
          <li v-for="(tecnologia, index) of tecnologias" :key="index">
            {{ tecnologia }}
          </li>
        </ul>
        <a :href="repositorio" target="_blank" class="Card__Hover__button">Repositorio</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import '../assets/css/card.css';
</style>
<script>
export default {
  name: 'Card',
  props: ['id', 'titulo', 'descripcion', 'imagen', 'tecnologias', 'repositorio']
}
</script>
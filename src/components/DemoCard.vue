<template>
  <div class="Card">
    <div class="Card__container">
      <div class="Card__image">
        <img :src="require('@/'+imagen)" alt="">
      </div>
      <div class="Card__Hover">
        <p class="Card__Hover__title">{{ titulo }}</p>
        <a href="#" target="_blank" class="Card__Hover__button">Demo</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import '../assets/css/card.css';
</style>
<script>
export default {
  name: 'DemoCard',
  props: ['id', 'titulo', 'imagen']
}
</script>
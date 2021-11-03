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
  .Card {
    width: 100%;
    height: 100%;
  }
  .Card__container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .card_image {
    width: 100%;
    height: 100%;
  }
  .Card img{
    width: 100%;
    min-height: 250px;
    z-index: 1000;
    object-fit: cover;
  }
  .Card__Hover {
    display: none;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    transition: 2s;
    width: 100%;
    height: 100%;
    z-index: 2000;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.8);
  }

  .Card__Hover__title {
    font-size: 1.4em;
    color: white;
    text-align: center;
    font-family: var(--fuente-demas);
    text-transform: uppercase;
    padding-bottom: 5px;
  }
  .Card__Hover__description {
    color: white;
    font-size: 13px;
    text-align: center;
    padding-bottom: 15px;
    font-family: var(--fuente-demas);
  }

  .Card__Hover__tecnologies {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding-bottom: 15px;
  }
  .Card__Hover__tecnologies li {
    background: var(--color-primario);
    border: solid 1px var(--color-accion);
    font-family: var(--fuente-demas);
    font-size: 10px;
    color: var(--color-texto);
    padding: 5px;

  }

  .Card__Hover__button {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    background: var(--color-primario);
    font-family: var(--fuente-demas);
    font-size: 13px;
    border: none;
    color: white;
    padding: 5px 0;
    box-shadow: 2px 2px 0px 0px var(--color-accion);
  }
  .Card__Hover__button:hover {
    cursor: pointer;
    box-shadow: none;
  }

  .Card__container:hover > .Card__Hover {
    transition: 4.5s linear;
    display: flex;
    
  }
</style>
<script>
export default {
  name: 'Card',
  props: ['id', 'titulo', 'descripcion', 'imagen', 'tecnologias', 'repositorio']
}
</script>
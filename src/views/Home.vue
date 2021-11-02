<template>
  <div class="Home">
    <main class="Home__main">
      <header class="Home__header">
        <div class="Home__header__title">
          <h1>DANBEN ERICK</h1>
        </div>
        <div class="Home__header__avatar">
          <img src="../assets/img/avatar/avatar.jpg" alt="">
        </div>
        <div class="Home__header__especialty">
          <p>Desarrollador Web</p>
        </div>
      </header>
      <section class="Home__section">
        <div class="Home__section__description">
          <p>Soy Danben CRUZ BARRETO, apasionado por el desarrollo web y las tecnologias Frontend y Backend</p>
        </div>
      </section>
      <footer class="Home_footer">
        
      </footer>
    </main>
  </div>
</template>

<style scoped>
  .Home__main {
    padding: 150px 0;
  }
  
  .Home__header .Home__header__title {
    padding-bottom: 15px;
  }
  .Home__header .Home__header__title h1 {
    text-align: center;
    color: var(--color-texto);
    font-weight: lighter;
    font-family: var(--fuente-demas);
  }
  .Home__header .Home__header__avatar {
    padding-bottom: 15px;
    text-align: center;
  }
  .Home__header .Home__header__avatar img {
    
    width: 150px;
    height: 150;
    border-radius: 50%;
  }
  .Home__header .Home__header__especialty {
    padding-bottom: 50px;
  }
  .Home__header .Home__header__especialty p {
    display: blocK;
    text-align: center;
    color: white;
    font-family: var(--fuente-demas);
  }
  .Home__header .Home__header__especialty p::after {
    content: '';
    display: block;
    margin: auto;
    width: 10%;
    height: 2px;
    background: var(--color-accion);
  }
  .Home__section__description {
    margin: auto;
    width: 50%;
  }
  .Home__section__description p {
    display: block;
    padding: 40px;
    background: var(--color-primario);
    color: var(--color-texto);
    font-family: var(--fuente-demas);
    box-shadow: 4px 4px 0px 0px var(--color-accion);
    border-left: none;
    border-top: none;
  }
</style>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

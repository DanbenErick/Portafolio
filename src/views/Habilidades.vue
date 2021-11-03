<template>
  <div class="Habilidades">
    <div class="Habilidades__container">
      <div class="Habilidades__box">
        <h2>FRONTEND</h2>
        <div class="Habilidades__tecnologias">
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>LENGUAJES</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>PREPROCESADORES</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>SASS</li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>FRAMEWORKS Y LIBRERIAS</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>React (Router, Redux, NextJS)</li>
                <li>Vue (Vuex, Router, Nuxt)</li>
                <li>Webpack</li>
                <li>Angular (Router, Services, Modules)</li>
                <li>DayJS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="Habilidades__box">
        <h2>BACKEND</h2>
        <div class="Habilidades__tecnologias">
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>LENGUAJES</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Go</li>
                <li>NodeJS</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>FRAMEWORKS Y TECNOLOGIAS</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>ExpressJS</li>
                <li>Laravel</li>
                <li>FastAPI</li>
                <li>Flask</li>
                <li>Django</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="Habilidades__box">
        <h2>BASE DE DATOS</h2>
        <div class="Habilidades__tecnologias">
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>RELACIONAL</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>SQL Server</li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>NO RELACIONAL</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  * {
    color: var(--color-texto);
    font-family: var(--fuente-demas);
  }
  .Habilidades__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    height: 80vh;
    grid-gap: 20px;
    margin: auto;
    align-content: center;
  }
  .Habilidades__box {
     
  }
  .Habilidades__box h2 {
    font-family: var(--fuente-titulo);
    padding-bottom: 40px;
  }
  .Habilidades__box h3 {
    display: block;
    font-weight: lighter;
  }
  .Habilidades__box h3::after {
    content: '';
    display: block;
    width: 15%;
    height: 2px;
    background: var(--color-accion);
    margin-bottom: 15px;
  }

  .Habilidades__box li {
    display: block;
  }

  .Habilidades__box li::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-texto);
    margin-bottom: 5px;
  }

  .Habilidades__tecnologias {
    background: var(--color-primario);
    padding: 20px 30px;
    height: 100%;
    box-shadow: 4px 4px 0px 0px var(--color-accion);
  }


  .Habilidades__contenido ul {
    list-style: none;
  }

</style>
<script>
export default {
  name: 'Habilidades'
}
</script>
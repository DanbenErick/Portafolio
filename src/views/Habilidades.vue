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
                <li>HTML
                  <span class="habilidades__contenido__indicador" data-indicador="10"></span>
                </li>
                <li>CSS
                  <span class="habilidades__contenido__indicador" data-indicador="10"></span>
                </li>
                <li>JS
                  <span class="habilidades__contenido__indicador" data-indicador="9"></span>
                </li>
                <li>Typescript
                  <span class="habilidades__contenido__indicador" data-indicador="8"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>PREPROCESADORES</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>SASS
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>FRAMEWORKS Y LIBRERIAS</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>React (Router, Redux, NextJS)
                  <span class="habilidades__contenido__indicador" data-indicador="8"></span>
                </li>
                <li>Vue (Vuex, Router, Nuxt)
                  <span class="habilidades__contenido__indicador" data-indicador="8"></span>
                </li>
                <li>Webpack
                  <span class="habilidades__contenido__indicador" data-indicador="6"></span>
                </li>
                <li>Angular (Router, Services, Modules)
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
                <li>DayJS
                  <span class="habilidades__contenido__indicador" data-indicador="6"></span>
                </li>
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
                <li>Java
                  <span class="habilidades__contenido__indicador" data-indicador="6"></span>
                </li>
                <li>Python
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
                <li>Go
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
                <li>NodeJS
                  <span class="habilidades__contenido__indicador" data-indicador="8"></span>
                </li>
                <li>PHP
                  <span class="habilidades__contenido__indicador" data-indicador="8"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>FRAMEWORKS Y TECNOLOGIAS</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>ExpressJS
                  <span class="habilidades__contenido__indicador" data-indicador="9"></span>
                </li>
                <li>Laravel
                  <span class="habilidades__contenido__indicador" data-indicador="6"></span>
                </li>
                <li>FastAPI
                  <span class="habilidades__contenido__indicador" data-indicador="6"></span>
                </li>
                <li>Flask
                  <span class="habilidades__contenido__indicador" data-indicador="6"></span>
                </li>
                <li>Django
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="Habilidades__box">
        <h2>BD Y OTROS</h2>
        <div class="Habilidades__tecnologias">
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>RELACIONAL</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>MySQL
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
                <li>PostgreSQL
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
                <li>SQL Server
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>NO RELACIONAL</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>MongoDB
                  <span class="habilidades__contenido__indicador" data-indicador="6"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="Habilidades__tecnologias__contenido">
            <div class="Habilidades__subtitulo">
              <h3>HERRAMIENTAS</h3>
            </div>
            <div class="Habilidades__contenido">
              <ul>
                <li>Git
                  <span class="habilidades__contenido__indicador" data-indicador="8"></span>
                </li>
                <li>Figma
                  <span class="habilidades__contenido__indicador" data-indicador="9"></span>
                </li>
                <li>Adobe XD
                  <span class="habilidades__contenido__indicador" data-indicador="7"></span>
                </li>
                <li>Postman
                  <span class="habilidades__contenido__indicador" data-indicador="9"></span>
                </li>
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
    margin: 0 auto;
    align-content: center;
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
    background: white;
    box-shadow: 2px 2px 0px 0px var(--color-accion);
    margin-bottom: 15px;
  }

  .Habilidades__box li {
    display: block;
  }

  .Habilidades__tecnologias {
    background: var(--color-primario);
    padding: 20px 30px;
    height: 100%;
    box-shadow: 4px 4px 0px 0px var(--color-accion);
  }

  .Habilidades__contenido {
    padding-bottom: 15px;
  }

  .Habilidades__contenido ul {
    list-style: none;
  }
  .Habilidades__box .Habilidades__contenido li .habilidades__contenido__indicador {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-texto);
    margin-bottom: 5px;
  }
  .Habilidades__box .Habilidades__contenido li .habilidades__contenido__indicador::after {
    content: '';
    display: block;   
    height: 2px;
    background: linear-gradient(90deg, rgba(48,131,220,1) 22%, rgba(0,104,215,1) 99%);;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
  .Habilidades__container {
    grid-template-columns: 1fr;
    margin: 430px auto;
    width: 90%;
    height: 100%;
    overflow: show;
  }
  .Habilidades__box {
    display: flex;
    flex-direction: column;

  }
  
}

  @import './../assets/css/indicador.css';

</style>
<script>
export default {
  name: 'Habilidades'
}
</script>
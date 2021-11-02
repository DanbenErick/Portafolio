<template>
  <div class="Sidebar">
    <div class="Sidebar__container">
      <aside>
        <div class="Sidebar__title">
          <h1>DANBEN ERICK</h1>
        </div>
        <div class="Sidebar__links">
          <ul>
            <li>
              <router-link to="/" active-class="active">Home</router-link>
            </li>
            <li>
              <router-link to="/proyectos" active-class="active">Proyectos</router-link>
            </li>
            <li>
              <router-link to="/habilidades" active-class="active">Habilidades</router-link>
            </li>
          </ul>
        </div>
        <div class="Sidebar__footer">
          <ul>
            <li>
              <a href="#" target="_blank">
                <i class="icon-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="icon-github"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="icon-mail"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.Sidebar {
  height: 100vh;
  max-height: 100vh;;
}
.Sidebar .Sidebar__container {
  height: 100%;
}

.Sidebar aside {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.Sidebar .Sidevar_title {
  
}
.Sidebar h1 {
  text-align: center;
  color: var(--color-texto);
  font-family: var(--fuente-titulo);
}
.Sidebar .Sidebar__links {
  
}
.Sidebar .Sidebar__links ul {
  list-style: none;
}
.Sidebar .Sidebar__links a {
  display: block;
  text-align: center;
  color: var(--color-texto);
  text-decoration: none;
  font-family: var(--fuente-demas);
  padding-bottom: 10px;
}
.Sidebar .Sidebar__links a::after {
  display: block;
  content: '';
  margin: auto;
  width: 5%;
  height: 2px;
  background: var(--color-primario);
}
.Sidebar .Sidebar__links a.active::after {
  background: var(--color-accion);
}
.Sidebar .Sidebar__links a:hover:after {
  background: var(--color-accion);
}
.Sidebar .Sidebar__footer {
  display: flex;
  justify-content: center;
}
.Sidebar .Sidebar__footer ul {
  width: 40%;
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.Sidebar .Sidebar__footer i {
  color: var(--color-texto);
  font-size: 1.5em;
}
.Sidebar .Sidebar__footer a {
  text-decoration: none;
}
.Sidebar .Sidebar__footer a:hover > i {
  color: white;
}
</style>

<script>
export default {
  name: "Sidebar",
};
</script>

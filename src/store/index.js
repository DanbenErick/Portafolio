import { createStore } from 'vuex'

export default createStore({
  state: {
    proyectos: [
      {
        id: 1,
        titulo: 'Buscador por DNI',
        descripcion: 'Este proyecto se creo para poder buscar la informacion de una persona con solo su DNI, se realizo el con:',
        imagen: 'assets/img/projects/project_1.png',
        tecnologias: ['HTML', 'PureCSS', 'JS'],
        repositorio: 'https://github.com/DanbenErick/Verificacion_de_ID',
        demo: 'https://verificacion-id.netlify.app/'
      },
      {
        id: 2,
        titulo: 'Buscador de Pokemones',
        descripcion: 'Este proyecto es para poder hacer un busqueda de pokemones por nombre e id, utizo el API publico de PokeAPI para tener los datos, se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_2.png',
        tecnologias: ['React', 'Redux'],
        repositorio: 'https://github.com/DanbenErick/Buscador-de-Pokemon',
        demo: 'https://buscador-pokemon-v1.netlify.app/'
      },
      {
        id: 3,
        titulo: 'Kardex',
        descripcion: 'Este proyecto es un kardex, sirve para el area de almacen de una empresa, la app web funciona asincronamente, se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_3.png',
        tecnologias: ['React', 'Redux', 'PostgreSQL', 'Express'],
        repositorio: 'https://github.com/DanbenErick/Kardex',
        demo: ''
      },
      {
        id: 4,
        titulo: 'Tienda PHP',
        descripcion: 'Este es tienda virtual, cuenta con un panel de administracion y ademas cuenta con un modulo de roles (administrador, empleado, cliente), se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_4.png',
        tecnologias: ['HTML', 'PureCSS', 'JS', 'PHP', 'MySQL'],
        repositorio: 'https://github.com/DanbenErick/Tienda-PHP',
        demo: ''
      },
      {
        id: 5,
        titulo: 'Administrador de Negocio',
        descripcion: 'Es un administrador de negocio, donde se pueden registrar compras, ventas y administrador el inventario, se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_5.png',
        tecnologias: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
        repositorio: 'https://github.com/DanbenErick/Administrador-de-Negocio',
        demo: ''
      },
      {
        id: 6,
        titulo: 'Tasks',
        descripcion: 'Este es un proyecto de practica donde se conecta a firebase para poder llevar un registro de los datos guardados, se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_6.png',
        tecnologias: ['HTML', 'CSS', 'Firebase'],
        repositorio: 'https://github.com/DanbenErick/Tasks-Firebase',
        demo: 'https://tarea-firebase.netlify.app/'
      },
      {
        id: 7,
        titulo: 'Blog',
        descripcion: 'Este es un proyecto personal, es un blog donde se puden postear articulos, administrarlos y adicional tambien una administracion de usuarios, el proyecto se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_7.png',
        tecnologias: ['HTML', 'CSS', 'PHP', 'MySQL'],
        repositorio: 'https://github.com/DanbenErick/Blog-PHP',
        demo: ''
      },
      {
        id: 8,
        titulo: 'Concurso CAS',
        descripcion: 'Este proyecto esta se realizo para la municipalidad de Pasco, es un sistema CAS, sirve para poder hacer postulacion, descarga de documentos y reportes de resultados, el proyecto se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_8.png',
        tecnologias: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
        repositorio: 'https://github.com/DanbenErick/cas-hmpp',
        demo: ''
      },
      {
        id: 9,
        titulo: 'E-Commerce',
        descripcion: 'Esta es una tienda virtual y registro de citas, , el proyecto se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_9.png',
        tecnologias: ['React', 'Strapi', 'Paypal'],
        repositorio: 'https://github.com/DanbenErick/Verificacion_de_ID',
        demo: 'https://danbenerick.github.io/MainServer-Ecommerce'
      },
      {
        id: 10,
        titulo: 'Dentista App',
        descripcion: 'En una app de citas para odontologia, ingresa cada medico con su DNI(123456789), el proyecto se realizo con las siguientes tecnologias:',
        imagen: 'assets/img/projects/project_10.png',
        tecnologias: ['React', 'SQLite', 'UIKit'],
        repositorio: 'https://github.com/DanbenErick/Dentist-App',
        demo: 'https://dentista-app.netlify.app/#/'
      },
      {
        id: 11,
        titulo: 'Pokemon Vue',
        descripcion: 'Es una web para poder buscar pokemon y saber el detalle de cada uno, se realizo el con:',
        imagen: 'assets/img/projects/project_11.png',
        tecnologias: ['Bootstrap', 'Vue', 'Vuex', 'Vue Router'],
        repositorio: 'https://github.com/DanbenErick/pokemon-vue',
        demo: 'https://pokemonv2-vue.netlify.app/'
      },
      {
        id: 12,
        titulo: 'Tareas Vue',
        descripcion: 'Proyecto para poder guardar tareas y poder cambiarlas de estado, se realizo el con:',
        imagen: 'assets/img/projects/project_12.png',
        tecnologias: ['Bootstrap', 'Vue', 'Vuex'],
        repositorio: 'https://github.com/DanbenErick/Task-vue',
        demo: 'https://tarea-vue.netlify.app/'
      },
      {
        id: 13,
        titulo: 'Task Flask',
        descripcion: 'Web de tareas, se realizo el con:',
        imagen: 'assets/img/projects/project_13.png',
        tecnologias: ['Bootstrap', 'Flask', 'Python', 'SQLite'],
        repositorio: 'https://github.com/DanbenErick/Verificacion_de_ID',
        demo: ''
      },
      {
        id: 14,
        titulo: 'Duchas Web',
        descripcion: 'Web para poder llevar el control de un negocio de duchas, se realizo el con:',
        imagen: 'assets/img/projects/project_14.png',
        tecnologias: ['SematicUI', 'Vue', 'Vuex', 'Vue Router'],
        repositorio: 'https://github.com/DanbenErick/Duchas-vue',
        demo: 'https://duchas-vue.netlify.app/'
      },
      {
        id: 15,
        titulo: 'Actividad Web',
        descripcion: 'Web para poder llevar el control de una acvidad como pollada, truchada u otro, se realizo el con:',
        imagen: 'assets/img/projects/project_15.png',
        tecnologias: ['BulmaCSS', 'Vue', 'Vuex', 'Vue Router'],
        repositorio: 'https://github.com/DanbenErick/actividad-vue',
        demo: 'https://actividad-vue.netlify.app/'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

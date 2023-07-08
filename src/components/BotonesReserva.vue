<template>
    <div>

  
      <div>

        <router-link :to="{ name: 'recepcionista-reservas' }">
          <button type="button" :class="{ 'second custom-font-size' : true, 'activo': isRouteActive('recepcionista-reportes-precios') }">
            <span class="tamano">PRECIOS</span>
          </button>
        </router-link>
      </div>
  
      <div>
        <router-link :to="{ name: 'recepcionista-reservas-horario' }">
          <button type="button" :class="{ 'third custom-font-size' : true, 'activo': isRouteActive('recepcionista-reportes-personas') }">
            <span class="tamano">PERSONAS</span>
          </button>
        </router-link>
      </div>
      
    </div>
  </template>
  
  <script>

  
  export default {
    name: 'BotonesReserva',

    data() {
    },
    methods:{
      isRouteActive(routeName) {
              return this.$route.name === routeName;
          }
    }
  };
  </script>
  
  <style>
  

  
  
  .activo{
      background-color: #2c3d5e;
  }
  
  </style>
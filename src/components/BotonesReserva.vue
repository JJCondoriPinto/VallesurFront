<template>
    <div class="d-flex">

  
      <div>

        <router-link :to="{ name: 'recepcionista-reservas' }">
          <button type="button" :class="{ 'btn btn-dark rounded-0 custom-font-size' : true, 'activo': isRouteActive('recepcionista-reservas') }">
            <span class="tamano">TABLERO</span>
          </button>
        </router-link>
      </div>
  
      <div>
        <router-link :to="{ name: 'recepcionista-reservas-horario' }">
          <button type="button" :class="{ 'btn btn-dark rounded-0 custom-font-size' : true, 'activo': isRouteActive('recepcionista-reservas-horario') }">
            <span class="tamano">HORARIO</span>
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
      background-color: #2c3d5e !important;
  }
  
  </style>
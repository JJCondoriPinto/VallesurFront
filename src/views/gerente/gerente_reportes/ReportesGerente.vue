<template>
    <div class="html">
      <div class="body-app">
        <div class="app-container">
          <SidebarComponent>
            <ListSidebarGerente />
          </SidebarComponent>
  
          <div class="app-content">
            <HeaderComponent>
              <template #title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossorigin
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap"
                  rel="stylesheet"
                />
  
                DASHBOARD: REPORTES OPERATIVOS
              </template>
            
            </HeaderComponent>


            <BotonesGraficosGerente></BotonesGraficosGerente>
            <div class="col-md-12 w-100 parent-canvas">
              <GraficoBarras></GraficoBarras>
              <GraficoLinear></GraficoLinear>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import SidebarComponent from "@/components/SidebarComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import ListSidebarGerente from "@/components/ListSidebarGerente.vue";
  import BotonesGraficosGerente from "@/components/BotonesGraficoGerente.vue"; 
  import GraficoBarras from "@/components/GraficoBarras";
  import GraficoLinear from "@/components/GraficoLinear";

  export default {
    name: "HomeRecepView",
    name2: "BarChart",
    components: {
      SidebarComponent,
      ListSidebarGerente,
      HeaderComponent,
      GraficoBarras,
      GraficoLinear,
      BotonesGraficosGerente,
    },
    data() {
      return {

      };
    },
  };
  </script>
  
  <style>
    .parent-canvas {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      overflow-y: auto;
      height: 100%;
    }
    @media screen and (min-width: 1200px) {
      .parent-canvas {
        flex-direction: row;
        justify-content: space-evenly;
        column-gap: 1rem;
      }
    }
  </style>
  
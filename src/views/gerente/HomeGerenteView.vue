<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarGerente />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent>   
                        <template #title> Inicio </template>
                        <template #button-insert>
                            <button class="app-content-headerButton" v-on:click="addRemind()" data-bs-toggle="modal" data-bs-target="#newRemind" data-bs-whatever="@mdo">
                                Añadir recordatorio
                            </button>
                        </template>
                    </HeaderComponent>

                    <!-- Contenido del dashboard -->
                    <div class="container mt-4 gap-3 card-home">    
                        <StatisticsHomeComponent> </StatisticsHomeComponent>
                        <ReminderHomeComponent ref="ReminderHomeComponent"> </ReminderHomeComponent>
                            <!-- <div class="col-md-4 col-sm-12">
                                <div
                                    class="card text-white"
                                    style="
                                        background: var(
                                            --app-content-secondary-color
                                        );
                                    "
                                >
                                    <div
                                        class="card-body"
                                        style="
                                            max-height: 450px;
                                            overflow-y: auto;
                                        "
                                    >
                                        <h5 class="card-title">
                                            Actividades de hoy
                                        </h5>
                                        <div
                                            class="alert alert-warning alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <strong>Nota martes! :</strong>
                                            <br />
                                            Visitantes desde Cuzco, jugadores
                                            profesionales
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            class="alert alert-primary alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <strong>Nota martes! :</strong>
                                            <br />
                                            Visitantes desde Cuzco, jugadores
                                            profesionales
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            class="alert alert-success alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <strong>Nota martes! :</strong>
                                            <br />
                                            Visitantes desde Cuzco, jugadores
                                            profesionales
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            class="alert alert-danger alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <strong>Nota martes! :</strong>
                                            <br />
                                            Visitantes desde Cuzco, jugadores
                                            profesionales
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                    </div>
                    <!-- Fin del contenido del dashboard -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import ListSidebarGerente from "@/components/ListSidebarGerente.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import StatisticsHomeComponent from "@/components/StatisticsHomeComponent.vue"
import ReminderHomeComponent from "@/components/ReminderHomeComponent.vue";

export default {
    name: "HomeGerenteView",
    components: {
        SidebarComponent,
        ListSidebarGerente,
        HeaderComponent,
        StatisticsHomeComponent,
        ReminderHomeComponent
    },
    methods: {
        addRemind() {
            this.$refs.ReminderHomeComponent.addRemind();
        }
    }
};
</script>

<style>
@import url("@/css/app.css");
</style>

<template>
    <div class="col-xl-8 col-sm-12 col-md-12">
        <!-- Estadísticas -->
        <div class="card-statistics">
            <div class="card col-sm-12 col-md-8">
                <div class="card-header py-1">
                    <p class="mb-0">Entradas</p>
                </div>
                <div class="card-body py-0">
                    <i class="fs-1">{{ this.numCheckins }}</i>
                    <p class="fs-5">Esta semana</p>
                </div>
            </div>
            <div class="card col-sm-12 col-md-8">
                <div class="card-header py-1">
                    <p class="mb-0">Salidas</p>
                </div>
                <div class="card-body py-0">
                    <i class="fs-1">{{ this.numCheckouts }}</i>
                    <p class="fs-5">Esta semana</p>
                </div>
            </div>
            <div class="card col-sm-12 col-md-8">
                <div class="card-header py-1">
                    <p class="mb-0">Huespedes</p>
                </div>
                <div class="card-body py-0">
                    <i class="fs-1">{{ this.numHuespedes }}</i>
                    <p class="fs-5">Actualmente</p>
                </div>
            </div>
            <div class="card col-sm-12 col-md-8 card-recep">
                <div class="card-header py-1">
                    <p class="mb-0">Recepcionistas</p>
                </div>
                <div class="card-body py-0">
                    <i class="fs-1">{{ this.numRecepcionistas }}</i>
                    <p class="fs-5">Actualmente registrados</p>
                </div>
            </div>
            <div class="card col-sm-12 col-md-8">
                <div class="card-header py-1">
                    <p class="mb-0">Reservas</p>
                </div>
                <div class="card-body py-0">
                    <i class="fs-1">{{ this.numReservas }}</i>
                    <p class="fs-5">En curso</p>
                </div>
            </div>
            <div class="card col-sm-12 col-md-8 card-habit">
                <div class="card-header py-1">
                    <p class="mb-0">Habitaciones</p>
                </div>
                <div class="card-body py-0">
                    <i class="fs-1">{{ this.numHabitaciones }}</i>
                    <p class="fs-5">Actualmente ocupadas</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "StatisticsHomeComponent",
    data() {
        return {
            numCheckins: "...",
            numCheckouts: "...",
            numHuespedes: "...",
            numRecepcionistas: "...",
            numHabitaciones: "...",
            numReservas: "...",
        }
    },
    created() { 
        axios.get('api/count/checkins')
        .then(res => {
            this.numCheckins = res.data.data;
        })
        axios.get('api/count/checkouts')
        .then(res => {
            this.numCheckouts = res.data.data;
        })
        axios.get('api/count/reservas')
        .then(res => {
            this.numReservas = res.data.data;
        })
        axios.get('api/count/habitaciones')
        .then(res => {
            this.numHabitaciones = res.data.data;
        })
        axios.get('api/count/recepcionistas')
        .then(res => {
            this.numRecepcionistas = res.data.data;
        })
        axios.get('api/count/huespedes')
        .then(res => {
            this.numHuespedes = res.data.data;
        })
    }
};
</script>

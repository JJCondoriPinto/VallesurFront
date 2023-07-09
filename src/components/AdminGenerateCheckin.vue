<template>
    <div class="container-edit">
        <div class="form-parent card-show-parent">
            <div class="form">
                <form class="form-update" @submit.prevent="hacerCheckIn">
                    <input type="hidden" name="estado" value="{{ }}">
                    <div class="card-header">
                        <p>Generar Check In</p>
                    </div>
                    <div class="card-content">
                        <div class="card-group form-group">
                            <label for="notas">Notas Adicionales</label>
                            <input class="form-input" type="text" v-model="formData.nota_adicionales" name="notas" required>
                        </div>
                        <div v-if="nro_pax>0">

                            <div class="card-group form-group d-inline">
                                <label>Escanear PAX</label>
                                <div class="mt-2">
                                    <button class="btn btn-primary" @click="scanPax" :disabled="isDisabled">
                                        Escanear Acompañante {{ count + 1 }}
                                    </button>
                                </div>
                                <!-- <div v-for="(n, index) in inputCount" :key="n">
                                    <button class="btn btn-primary mt-2" @click="scanPax">Escanear Acompañante Nro {{ index +
                                        1 }}</button>
                                </div> -->
                                <div class="progress mt-3">
                                    <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }"
                                        :aria-valuenow="count" aria-valuemin="0" :aria-valuemax="nro_pax">
                                        {{ count }} / {{ nro_pax }}
                                    </div>
                                </div>
                                <button class="form-input " data-bs-toggle="modal" data-bs-target="#waitModal" id="abrirModal"
                                    hidden></button>
                                <button class="form-input " data-bs-toggle="modal" data-bs-target="#confirmarModal"
                                    id="abrirModalConfirmar" hidden></button>
                            </div>
    
                            <div class="card-group form-group">
                                <label>PAX</label>
                                <div v-for="(value, index) in values" :key="index">
                                    <!-- <input class="form-input" type="text" v-model="values[index].data" /> -->
                                    <div class="card bg-primary mb-3">
                                        <div class="card-header d-flex">
                                            <h4 class="me-auto text-center">PAX {{ index + 1 }}</h4>
                                            <button class="btn btn-success me-2" @click="eliminarPax(index)"><i
                                                    class="fa-solid fa-trash"></i></button>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text text-start">
                                                Nombres: {{ values[index].nombres }}<br>
                                                Apellidos: {{ values[index].apellidos }}<br>
                                                Nro de Documento: {{ values[index].nro_documento }}<br>
                                                Fecha de Nacimiento: {{ values[index].fecha_nacimiento }}<br>
                                                Sexo: {{ values[index].sexo }}
                                                Región: {{ values[index].region }}<br>
                                                Direccion: {{ values[index].direccion }}<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="confirmarModal" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content " style="background: var(--app-content-secondary-color);">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                                            Resultados
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            id="closeModalConfirmar"></button>
                                    </div>

                                    <div class="modal-body text-start">
                                        <div v-if="FotoEcaneada">
                                            <div class="card-group form-group">
                                                <label>Nombres</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.nombres"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Apellidos</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.apellidos"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Nro de Documento</label>
                                                <input class="form-input" type="text"
                                                    v-model="resultadoEscaner.nro_documento" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Sexo</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.sexo"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Fecha de Nacimiento</label>
                                                <input class="form-input" type="text"
                                                    v-model="resultadoEscaner.fecha_nacimiento" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Región</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.region"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Dirección</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.direccion"
                                                    required>
                                            </div>

                                            <!-- <button @click="addValue(resultadoEscaner)"> Añadir Pax</button> -->
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                            id="cerrar">Cancelar</button>
                                        <button type="button" class="btn btn-success"
                                            @click="addValue(resultadoEscaner)">Confirmar Datos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="waitModal" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered ">
                                <div class="modal-content " style="background: var(--app-content-secondary-color);">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                                            Esperando Escaneo
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            id="closeModal" hidden></button>
                                    </div>

                                    <div class="modal-body">
                                        <div ref="lottieContainer"></div>
                                        <h4 class="text text-light text-center">Toma las fotografias al DNI</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="showAlert" class="alert alert-danger" role="alert">
                            Debes registrar todos los acompañantes
                        </div>
                        <div class="card-group form-group buttons">
                            <button class="raise btn-green" type="submit">Generar Checkin</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
.form-group {
    display: flex;
    flex-direction: column;
}
</style>
<script>
import axios from 'axios';
import { io } from 'socket.io-client';
import $ from 'jquery';
import lottie from 'lottie-web';
import animationData from './loading.json';
export default {
    data() {
        return {
            showAlert:false,
            count: 0,
            nombreHuesped: null,
            values: [],
            FotoEcaneada: false,
            resultadoEscaner: {
                apellidos: null,
                nombres: null,
                nro_documento: null,
                fecha_nacimiento: null,
                sexo: null,
                region: null,
                direccion: null
            },
            nro_pax: null,
            mensajes: null,
            socket: null,
            notas: '',
            formData: {
                id_reserva: '',
                id_recepcionista: '',
                paxs: null,
                fecha_ingreso: '',
                nota_adicionales: '',
            },
        };
    },
    props: ['id'],
    mounted() {
        console.log(this.nro_pax);
        this.loadAnimation();
        this.getReserva();
        this.socket = io('http://192.168.1.101:3000', { transports: ['websocket'] });

        this.socket.on('connect', () => {
            console.log('Conexión establecida con el servidor Socket.IO');
        });

        this.socket.on('ping', (data) => {
            console.log("Mensaje Recibido: ", data);
            this.mensajes = data;
        })

        this.socket.on('disconnect', () => {
            console.log('Desconectado del servidor Socket.IO');
        });

        this.socket.on('sendToVue', (data) => {
            console.log(data);
            this.cerrarModal();
            this.resultadoEscaner.nombres = data.data.nombres;
            this.resultadoEscaner.apellidos = data.data.apellidos;
            this.resultadoEscaner.direccion = data.data.direccion;
            this.resultadoEscaner.fecha_nacimiento = data.data.fecha_nacimiento;
            this.resultadoEscaner.nro_documento = data.data.nro_documento;
            this.resultadoEscaner.region = data.data.region;
            this.resultadoEscaner.sexo = data.data.sexo;
            this.FotoEcaneada = true;
            this.mostrarModalConfirmar();
        });

        this.socket.on('cancelScan', (data) => {
            console.log(data);
            this.cerrarModal();
        })
    },
    beforeUnmount() {
        this.socket.disconnect();
    },
    computed: {

        inputCount() {
            return new Array(this.nro_pax).fill(0);
        },
        isDisabled() {
            return this.count >= this.nro_pax;
        },
        progressPercent() {
            return (this.count / this.nro_pax) * 100;
        },
    },
    methods: {
        eliminarPax(index) {
            this.values.splice(index, 1);
            this.count--;
        },
        incrementCount() {
            this.count++;
        },
        addValue(value) {
            this.FotoEcaneada = false;
            this.values.push(value);
            this.resultadoEscaner = {
                apellidos: null,
                nombres: null,
                nro_documento: null,
                fecha_nacimiento: null,
                sexo: null,
                region: null,
                direccion: null
            };
            console.log(this.values);
            this.incrementCount();
            this.cerrarModalConfirmar();
        },
        loadAnimation() {
            lottie.loadAnimation({
                container: this.$refs.lottieContainer,
                animationData: animationData,
                renderer: 'svg', // Puedes elegir 'svg', 'canvas' o 'html' según tus necesidades
                loop: true, // Define si la animación debe repetirse
                autoplay: true, // Define si la animación debe reproducirse automáticamente al cargar
            });
        },
        mostrarModalConfirmar() {
            $('#abrirModalConfirmar').click();
        },
        cerrarModalConfirmar() {
            $('#closeModalConfirmar').click();
        },
        mostrarModal() {
            $('#abrirModal').click();
        },
        cerrarModal() {
            $('#closeModal').click();
        },
        scanPax() {
            
            this.socket.emit("sendToFlutter", this.nombreHuesped);
            this.mostrarModal();
        },
        send() {
            this.socket.emit("sendToFlutter", this.nro_pax)
        },
        hacerCheckIn() {
            const fechaActual = new Date().toLocaleString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }).replace(/\//g, '-').replace(',', '');
            this.formData.fecha_ingreso = fechaActual
            if (this.count < this.nro_pax) {
                this.showAlert=true;
            } else {
                this.showAlert=false;
                this.formData.paxs=this.values;
                console.log(this.formData);
                /* axios.post('/api/checkin', this.formData).then((value) => {
                    console.log(value);
                    this.$router.push({ name: 'recepcionista-reservas' });
                }) */

            }
        },
        getReserva() {
            axios.get('/api/reserva', {
                params: {
                    "id": this.id
                }
            }).then((value) => {
                console.log(value.data.data);
                this.formData.id_reserva = value.data.data._id;
                this.formData.id_recepcionista = this.$store.state.user._id;
                this.nro_pax = value.data.data.datosReserva.pax_reserva;
                this.nombreHuesped = value.data.data.huesped.nombres + " " + value.data.data.huesped.apellidos
            });
        }
    }
}
</script>
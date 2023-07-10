<template>
    <div class="modal fade modal-sm" id="Huespedes" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-top ">
            <div class="modal-content " style="background: var(--app-content-secondary-color);">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                        Confirmar
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close"></button>
                </div>

                <div class="modal-body">
                    <h5 class="text text-light">Esta seguro que desea eliminar esta huesped?</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cerrar">Cancelar</button>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#ModalInfo"  @click="eliminarReserva">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
    <div v-show="mostrarInfo">

        <ModalInfo  title="Atención" :body="message"></ModalInfo>
    </div>
</template>
<script>
/* 
import $ from 'jquery'; */
import axios from 'axios';
import ModalInfo from '@/components/ModalInfo.vue';
export default {
    props: ["id"],
    data() {
        return {
            message:"",
            mostrarInfo: false,
            vueComponent: this
        };
    },
    methods: {
        eliminarReserva() {
            console.log(this.id);
            axios.delete("/api/huespedes", {
                data: {
                    id: this.id
                }
            })
                .then(response => {
                    console.log(response);
                    this.message=response.data.message
                    this.mostrarInfo=true;
            });
        }
    },
    components: { ModalInfo }
}
</script>